// シナリオ検証：リンク切れ、到達不能な場面・結末・記憶、選択肢のない行き止まりを区画ごとに探す。
// 使い方: node validate.js
// 記憶の持ち方は「何も持たない状態から、得られる記憶を順に足していく」経路で調べる（全組み合わせの総当たりではない）。
const sc = require('../scenario_a4.js');
require('../codex.js');
const R = require('../rules.js');

const errors = [];
for (const [id, n] of Object.entries(sc.nodes)) {
  for (const c of n.choices || []) {
    if (!sc.nodes[c.to]) errors.push(`リンク切れ: ${id} → ${c.to}`);
    else if (sc.nodes[c.to].area !== n.area) errors.push(`区画をまたぐ選択肢: ${id} → ${c.to}`);
    if (c.viaMem && !sc.mems[c.viaMem]) errors.push(`未定義の記憶: ${c.viaMem}`);
  }
  for (const r of n.redirect || []) if (!sc.nodes[r.to]) errors.push(`転送先なし: ${id} → ${r.to}`);
  for (const k of n.recall || []) if (!sc.codex.some(s => s.lines.some(l => l.id === k))) errors.push(`手記の行がない: ${id} → ${k}`);
  if (n.end && !sc.ends[n.end.id]) errors.push(`未定義の結末: ${n.end.id}`);
  if (n.end && n.end.mem && !sc.mems[n.end.mem]) errors.push(`未定義の記憶: ${n.end.mem}`);
  if (!n.end && !(n.choices || []).length) errors.push(`選択肢なし: ${id}`);
  if (n.router && !(n.redirect || []).some(r => !r.if)) errors.push(`振り分けに既定の行き先がない: ${id}`);
  if (!sc.names[id]) errors.push(`表示名なし: ${id}`);
}
for (const s of sc.codex) for (const l of s.lines) for (const id of l.seen) if (!sc.nodes[id]) errors.push(`手記の条件に未定義の場面: ${l.id} → ${id}`);

const T_CAP = 9;
const cstr = s => Object.keys(s.c || {}).sort().map(k => k + s.c[k]).join('');
const key = s => [s.node, s.hp, Math.min(s.t, T_CAP), s.h || 0, cstr(s), s.flags.slice().sort().join(','), s.mems.slice().sort().join(',')].join('|');
const clone = s => ({ node: s.node, hp: s.hp, t: Math.min(s.t, T_CAP), h: s.h || 0, c: Object.assign({}, s.c), flags: s.flags.slice(), mems: s.mems.slice() });
const nodesSeen = new Set(), endsSeen = new Set();
let total = 0;

// 開始状態の集合から、死ぬか抜けるまでを探索する。得た記憶と、踏破時の持ち越し状態を返す
function explore(starts) {
  const seen = new Set(), mems = new Set(), exits = new Map(), ends = new Set();
  let queue = [];
  for (const s of starts) { R.enter(sc, s.node, s); const k = key(s); if (!seen.has(k)) { seen.add(k); queue.push(s); } }
  while (queue.length) {
    const next = [];
    for (const s of queue) {
      nodesSeen.add(s.node);
      s.mems.forEach(m => mems.add(m));
      const n = sc.nodes[s.node];
      if (n.end) {
        endsSeen.add(n.end.id); ends.add(n.end.id);
        if (n.end.mem) mems.add(n.end.mem);
        if (n.end.next) { const cp = R.carry(sc, s, n.end.next, n.end.id); exits.set(JSON.stringify(cp), cp); }
        continue;
      }
      const cs = R.choices(sc, s);
      if (!cs.length) errors.push(`行き止まり状態: ${key(s)}`);
      for (const c of cs) {
        const t = clone(s);
        R.apply(sc, c.eff, t);
        if (t.hp <= 0 && !sc.nodes[c.to].end) t.node = sc.areas[n.area].collapse;
        else R.enter(sc, c.to, t);
        t.t = Math.min(t.t, T_CAP);
        const k = key(t);
        if (!seen.has(k)) { seen.add(k); next.push(t); }
      }
    }
    queue = next;
  }
  total += seen.size;
  return { mems, exits, ends };
}

// 記憶が増えなくなるまで繰り返す
function settle(makeStarts, base) {
  let M = base.slice(), exits = new Map(), last = new Set();
  for (let round = 0; round < 12; round++) {
    const r = explore(makeStarts(M));
    r.exits.forEach((v, k) => exits.set(k, v)); last = r.ends;
    const grown = [...new Set([...M, ...r.mems])];
    if (grown.length === M.length) break;
    M = grown;
  }
  return { M, exits, last };
}

const a1 = settle(M => [R.newRun(sc, M)], []);
const cps = [...a1.exits.values()];
// 第二区画は、第一区画の記憶を何も持たない場合と、すべて持つ場合の両方から調べる
let a2full; const exits2 = new Map();
for (const base of [[], a1.M]) { a2full = settle(M => cps.map(cp => R.fromCp(sc, cp, M)), base); a2full.exits.forEach((v, k) => exits2.set(k, v)); }
const cps3 = [...exits2.values()];
let a3full; const exits3 = new Map();
for (const base of [[], a2full.M]) { a3full = settle(M => cps3.map(cp => R.fromCp(sc, cp, M)), base); a3full.exits.forEach((v, k) => exits3.set(k, v)); }
// 最終区画：第三区画からの入り方に、確認用の入り方（気力4と6）を足して調べる
const cps4 = [...exits3.values()];
for (const flags of [['bled', 'viola'], ['debt', 'viola'], ['bled']]) for (const hp of [4, 6]) cps4.push({ area: 'a4', hp, flags });
const a4full = settle(M => cps4.map(cp => R.fromCp(sc, cp, M)), a3full.M);
// 記憶をすべて持った状態（気力の上限が最も低い）でも、すべての踏破に届くか
const ALL = a4full.M;
const a1all = explore([R.newRun(sc, ALL)]).ends, a2all = explore(cps.map(cp => R.fromCp(sc, cp, ALL))).ends, a3all = explore(cps3.map(cp => R.fromCp(sc, cp, ALL))).ends, a4all = explore(cps4.map(cp => R.fromCp(sc, cp, ALL))).ends;
for (const [id, e] of Object.entries(sc.ends)) if ((e.kind === 'clear' || e.kind === 'true') && !a1all.has(id) && !a2all.has(id) && !a3all.has(id) && !a4all.has(id)) errors.push(`全記憶を持つと届かない踏破: ${e.title}`);
for (const m of Object.keys(sc.mems)) if (!ALL.includes(m)) errors.push(`入手不能な記憶: ${m}`);
// 生還は、ヴィオラが生きている入り方なら、最終区画の記憶なしでも、気力4からでも届くか
const a4mems = ['m_rite', 'm_words', 'm_fifth'];
for (const cp of cps4.filter(cp => cp.flags.includes('viola'))) {
  if (!explore([R.fromCp(sc, cp, ALL)]).ends.has('t_true')) errors.push(`生還に届かない入り方: ${JSON.stringify(cp)}`);
  // 血を売った入り方は気力の上限が低く、初回（手記を読む周）では届かない設計。手記を読んだ後なら、鐘楼の記憶なしで届くこと
  const bled = cp.flags.includes('bled');
  const known = bled ? ALL.filter(m => m !== 'm_fifth') : ALL.filter(m => !a4mems.includes(m));
  if (!explore([R.fromCp(sc, cp, known)]).ends.has('t_true')) errors.push(`${bled ? '手記を読んだ後でも' : '最終区画の記憶なしでは'}生還に届かない入り方: ${JSON.stringify(cp)}`);
}
for (const cp of cps4.filter(cp => !cp.flags.includes('viola'))) if (explore([R.fromCp(sc, cp, ALL)]).ends.has('t_true')) errors.push(`ヴィオラなしで生還に届いてしまう: ${JSON.stringify(cp)}`);
// 第三区画は、どの入り方からでも踏破がひとつは残るか（全記憶＝上限が最も低い状態で）
// 第三区画の踏破は一通りだけ。二人を連れた入り方なら、第三区画の記憶を何も持たなくても届くか
const a3mems = ['m_viola', 'm_named', 'm_water', 'm_lethe'];
const fresh = explore(cps3.filter(cp => cp.flags.includes('irene') && cp.flags.includes('hilde')).map(cp => R.fromCp(sc, cp, ALL.filter(m => !a3mems.includes(m) && !a4mems.includes(m))))).ends;
if (!fresh.has('c3_rite')) errors.push('第三区画の記憶なしでは「二人の供」に届かない');
// 第二区画に最も弱い状態（気力6）で入っても、踏破がひとつは残るか
const weak = cps.filter(cp => cp.hp <= 6);
for (const cp of weak) { const r = explore([R.fromCp(sc, cp, a2full.M)]).ends; if (![...r].some(id => sc.ends[id].kind === 'clear')) errors.push(`踏破できない入り方: ${JSON.stringify(cp)}`); }

// 生還した後の周（again）だけ開く場面も、行き止まりなく通れて、生還に届くか
if (!explore(cps4.filter(cp => cp.flags.includes('viola')).map(cp => { const s = R.fromCp(sc, cp, ALL); s.flags.push('again'); return s; })).ends.has('t_true')) errors.push('生還後の周で生還に届かない');
for (const id of Object.keys(sc.nodes)) if (!nodesSeen.has(id) && !sc.nodes[id].router) errors.push(`到達不能な場面: ${id}`);
for (const id of Object.keys(sc.ends)) if (!endsSeen.has(id)) errors.push(`到達不能な結末: ${id}`);

console.log(`場面 ${nodesSeen.size}/${Object.keys(sc.nodes).length}、結末 ${endsSeen.size}/${Object.keys(sc.ends).length}、記憶 ${Object.keys(sc.mems).length}個、手記 ${sc.codex.reduce((a, s) => a + s.lines.length, 0)}行`);
console.log(`第二区画への入り方 ${cps.length}通り、第三区画への入り方 ${cps3.length}通り、最終区画への入り方 ${cps4.length}通り、探索した状態 ${total}`);
if (errors.length) { console.log('\n問題:'); [...new Set(errors)].slice(0, 40).forEach(e => console.log('  ' + e)); process.exit(1); }
console.log('問題なし');
