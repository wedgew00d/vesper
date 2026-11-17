// 進行ルール。ブラウザ（index.html）と検証スクリプト（validate.js）の両方から使う。
const RULES = (() => {
  const BASE_HP = 10, ENTRY_FLOOR = 6, MOVES_PER_BELL = 3;

  // flags に bled（血を売った）があれば、その周のあいだ上限がさらに2下がる
  function maxHp(sc, mems, flags) {
    let lost = flags && flags.includes('bled') ? 2 : 0;
    for (const id of mems) if (sc.mems[id] && sc.mems[id].truth) lost++;
    return BASE_HP - lost;
  }

  // イレーネの状態は、鐘（t）と行動フラグから決まる（第一区画）
  function irene(s) {
    if (s.flags.includes('irene_gone') || s.flags.includes('with_irene')) return 'gone';
    if (s.t >= 5) return 'mad';
    if (s.t >= 3) return 'shift';
    return 'sane';
  }

  function check(c, s) {
    if (!c) return true;
    if (c.mem && !c.mem.every(m => s.mems.includes(m))) return false;
    if (c.noMem && c.noMem.some(m => s.mems.includes(m))) return false;
    if (c.flag && !c.flag.every(f => s.flags.includes(f))) return false;
    if (c.noFlag && c.noFlag.some(f => s.flags.includes(f))) return false;
    if (c.tMin != null && s.t < c.tMin) return false;
    if (c.tMax != null && s.t > c.tMax) return false;
    if (c.hpMin != null && s.hp < c.hpMin) return false;
    if (c.hpMax != null && s.hp > c.hpMax) return false;
    if (c.irene && !c.irene.includes(irene(s))) return false;
    if (c.cnt) for (const k in c.cnt) { const v = (s.c && s.c[k]) || 0; if (v < c.cnt[k][0] || v > c.cnt[k][1]) return false; }
    return true;
  }

  const pressure = (sc, s) => !!(s.node && sc.areas[sc.nodes[s.node].area].pressure);

  // 効果を適用し、この適用で新しく得た記憶の一覧を返す
  function apply(sc, e, s) {
    const gained = [];
    if (!e) return gained;
    const t0 = s.t;
    if (e.t) s.t = Math.max(0, s.t + e.t);
    // 圧力のある区画（第二区画）だけの規則
    if (pressure(sc, s)) {
      // 拠点から別の場所へ三度動くと、鐘がひとつ鳴る
      if (e.half) { s.h = (s.h || 0) + e.half; while (s.h >= MOVES_PER_BELL) { s.h -= MOVES_PER_BELL; s.t += 1; } }
      // 鐘がひとつ鳴るたびに、気力が1削れる
      s.hp -= Math.max(0, s.t - t0);
    }
    if (e.set) for (const f of e.set) if (!s.flags.includes(f)) s.flags.push(f);
    if (e.unset) s.flags = s.flags.filter(f => !e.unset.includes(f));
    if (e.inc) { s.c = s.c || {}; for (const k in e.inc) s.c[k] = Math.max(0, (s.c[k] || 0) + e.inc[k]); }
    if (e.mem) for (const m of e.mem) if (!s.mems.includes(m)) { s.mems.push(m); gained.push(m); }
    if (e.hp) s.hp += e.hp;
    s.hp = Math.min(s.hp, maxHp(sc, s.mems, s.flags));
    return gained;
  }

  // ノードに入る。転送と入場時効果を処理し、追加で表示する段落と得た記憶を返す
  function enter(sc, id, s) {
    let guard = 0;
    for (;;) {
      const r = (sc.nodes[id].redirect || []).find(r => check(r.if, s));
      if (!r || ++guard > 8) break;
      id = r.to;
    }
    const extra = [], gained = [];
    for (const en of sc.nodes[id].enter || []) {
      if (!check(en.if, s)) continue;
      gained.push(...apply(sc, en.eff, s));
      if (en.p) extra.push(en.p);
    }
    if (s.hp <= 0 && !sc.nodes[id].end) id = sc.areas[sc.nodes[id].area].collapse;
    s.node = id;
    return { id, extra, gained };
  }

  function choices(sc, s) {
    return (sc.nodes[s.node].choices || []).filter(c => check(c.if, s));
  }

  function newRun(sc, mems) {
    return { node: sc.areas.a1.start, hp: maxHp(sc, mems), t: 0, h: 0, c: {}, flags: [], mems: mems.slice() };
  }

  // 区画を抜けたときの持ち越し。次の区画の冒頭に戻るための状態になる
  function carry(sc, s, area, endId) {
    const fn = sc.carryFn && sc.carryFn[area];
    const flags = (fn ? fn(s.flags, endId) : s.flags.filter(f => sc.carry.includes(f))).sort();
    return { area, hp: Math.min(maxHp(sc, s.mems, flags), Math.max(s.hp, ENTRY_FLOOR)), flags };
  }
  function fromCp(sc, cp, mems) {
    return { node: sc.areas[cp.area].start, hp: Math.min(cp.hp, maxHp(sc, mems, cp.flags)), t: 0, h: 0, c: {}, flags: cp.flags.slice(), mems: mems.slice() };
  }

  return { BASE_HP, MOVES_PER_BELL, maxHp, irene, check, pressure, apply, enter, choices, newRun, carry, fromCp };
})();
if (typeof module !== 'undefined') module.exports = RULES;
