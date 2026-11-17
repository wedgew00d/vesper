# 晩鐘の街 VESPER

死んで覚える周回型のノベルゲーム（ゲームブック風）。鐘の音で目を覚ました男が、記憶のないまま街からの脱出を目指す。死ねば、記憶だけが残る。

- プレイ: https://wedgew00d.github.io/vesper/
- 対応: PC のブラウザ、スマホ（縦向き推奨）
- 内容: 性的な示唆、暴力、精神的な支配の描写を含みます。17歳以上推奨。
- 進行はブラウザ（localStorage）に保存されます。

## 公開
ビルド不要。このリポジトリの中身をそのまま GitHub Pages（main ブランチの直下）で配信する。

## 構成
- `index.html` … 画面、スタイル、エンジン（進行、道筋、手記、音）
- `rules.js` … 進行ルール（気力、鐘、条件判定）。ゲームと検証の両方から使う
- `scenario.js` / `scenario_a2.js` / `scenario_a3.js` / `scenario_a4.js` … 第一〜最終区画の場面データ
- `codex.js` … 手記
- `tools/validate.js` … シナリオ検証（リンク切れ、届かない場面や結末、行き止まり、生還に届くか）
- `docs/IMAGES.md` … 画像を足すときの一覧と命名
- `img/` … 画像置き場（今は空）

## 場面データの書き方
```js
nodes[id] = {
  text: ['本文', { if: 条件, p: '条件つきの本文' }, { sep: true }],
  choices: [{ label, to, if: 条件, eff: 効果, viaMem: '記憶id' }],
  enter: [{ if, eff, p }],        // 入ったときの効果
  redirect: [{ if, to }],         // 条件で別の場面へ
  end: { id, mem, wipe, next }    // 結末
}
```
- 条件: `mem` `noMem` `flag` `noFlag` `tMin` `tMax` `hpMin` `hpMax` `cnt`
- 効果: `hp` `t` `set` `unset` `mem` `inc`

## 検証
```
node --max-old-space-size=6000 tools/validate.js
```
2〜3分かかる。最後に「問題なし」と出れば良い。場面データを変えたら走らせる。

## メモ
- 題字の「VESPER」を5回押すと、確認用の入り方（最終区画へ直接入る三通り）の表示を切り替えられる。
- 音はすべてコードで合成している（音声ファイルなし）。
- 書体は Google Fonts（Shippori Mincho ほか）を読みこむ。
