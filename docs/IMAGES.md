# 画像の一覧と命名

画像は今は入っていない。足すときは、下の名前のファイルを `img/` に置く。表示の仕組みは、画像が届いた段階で作る（ない画像の場面は、今のまま文章だけで出す）。

## 共通の決まり
- 形式は WebP（なければ JPG か PNG でも可。こちらで変換する）。
- ファイル名は下の表のとおり、半角小文字とアンダースコア。
- 全部そろっていなくてよい。あるものだけ使う。
- 文字、署名、透かしは入れない。
- 人物はすべて成人の女性。肌の露出や行為そのものは描かない（本文と同じく、示唆まで）。

## 絵柄の共通指定（生成の指示文の頭につける）
```
dark gothic fantasy, painterly illustration, muted desaturated palette of ink blue, bone white and ember red, thick fog, low key lighting, single warm light source, somber and quiet mood, no text, no watermark
```

## 1. 題字（1枚）
| ファイル | 比率・大きさ | 内容 |
|---|---|---|
| `img/title.webp` | 9:16、1080×1920 | 霧の街と遠い鐘楼。上3分の1は暗く空ける（題字が載る） |

指示文: `a fog-drowned gothic city at dusk seen from a wet cobblestone street, a distant bell tower silhouette, one fallen lantern glowing in the foreground, vast empty dark sky`

## 2. 背景（12枚）
本文の後ろに暗く敷く。16:9、1920×1080。スマホでは左右が切れるので、主題は中央の縦3分の1に置く。明るい部分は少なくする（上に文字が載る）。

| ファイル | 場所 | 指示文 |
|---|---|---|
| `img/bg/a1_street.webp` | 第一区画の石畳と広場 | `empty gothic plaza, wet cobblestones, a dry stone well, fog` |
| `img/bg/a1_hospice.webp` | 施療院の中 | `interior of a small medieval hospice, rows of empty cots, candlelight, a steaming bowl on a table` |
| `img/bg/a1_gate.webp` | 北の門 | `a huge iron city gate at the top of a slope, closed, fog pouring through the bars` |
| `img/bg/a2_street.webp` | 屠殺場通り | `narrow slaughterhouse alley, hanging hooks and chains, dark stains on stone, red lantern light` |
| `img/bg/a2_abattoir.webp` | 屠殺場の中 | `inside an abandoned abattoir, a stone table with a human-shaped hollow, channels cut into the floor` |
| `img/bg/a2_shrine.webp` | 祠 | `a tiny roadside stone shrine with a single candle, sheltered from the fog` |
| `img/bg/a3_house.webp` | 灯の館 | `opulent brothel hall in a gothic mansion, crimson drapes, many red paper lanterns, incense smoke` |
| `img/bg/a3_spring.webp` | 泉 | `an underground spring in a stone grotto, perfectly still black water, faint pale glow` |
| `img/bg/a3_gate.webp` | 最後の門 | `a tall stone gate on a long stairway, a hooded gatekeeper silhouette, red lanterns far below` |
| `img/bg/a4_nave.webp` | 大聖堂の身廊 | `vast cathedral nave, two rows of stone pillars, colorless light from high windows, a wall carved with names` |
| `img/bg/a4_altar.webp` | 祭壇と扉 | `cathedral altar shaped like a stone bed with a hollow, seven grooves in the floor, a black door without a handle behind it` |
| `img/bg/outside.webp` | 街の外（生還） | `dawn over grassy hills outside a city wall, clear sky, a trail of blackened withered footprints in the grass` |

## 3. 人物（6枚）
場面の頭に、縦長の絵として出す。3:4、1200×1600。膝上から頭まで。背景は暗く単純に。

| ファイル | 人物 | 指示文 |
|---|---|---|
| `img/ch/irene.webp` | イレーネ（平常） | `a gentle nun in a dark habit, very full figure, soft tired smile, holding a steaming bowl, candlelight, sleepless eyes` |
| `img/ch/irene_mad.webp` | イレーネ（五つ目の鐘の後） | `the same nun, the same calm smile, hands hidden behind her back, eyes too wide, cold blue light` |
| `img/ch/hilde.webp` | ヒルデ（平常） | `a tall muscular huntress with copper red hair, very full figure, fur mantle, greatsword on her back, wary stare` |
| `img/ch/hilde_blank.webp` | ヒルデ（忘れた後） | `the same huntress, relaxed open smile, standing guard, eyes slightly empty` |
| `img/ch/viola.webp` | ヴィオラ（平常） | `an elegant mature brothel mistress in a thin crimson gown, very full figure, knowing smile, incense smoke, red lantern light` |
| `img/ch/viola_true.webp` | ヴィオラ（嘘をやめた後） | `the same woman, smile gone, hungry intent gaze, reaching one hand toward the viewer` |

## 4. 場面の絵（8枚）
要の場面だけ。3:4、1200×1600。

| ファイル | 場面 | 指示文 |
|---|---|---|
| `img/ev/lap.webp` | イレーネの膝枕（第一区画） | `view from below, a nun leaning over the viewer resting on her lap, her hand in the viewer's hair, warm candlelight` |
| `img/ev/fur.webp` | ヒルデの毛皮（第二区画） | `a huntress wrapping one large fur around herself and the viewer beside a small fire, protective embrace, night` |
| `img/ev/incense.webp` | ヴィオラの誘い（第三区画） | `a brothel mistress reclining on a couch, beckoning with one finger, crimson drapes, thick incense` |
| `img/ev/vial.webp` | 泉の水の小瓶 | `a hand holding a small glass vial of clear water over a sleeping woman's lips, close up, no face shown` |
| `img/ev/anchor.webp` | 錨（最終区画） | `a woman in a crimson gown lying in the hollow of a stone altar, stone roots growing over her wrists, laughing through tears` |
| `img/ev/sword.webp` | 剣 | `a huntress walking into a human-shaped hollow in a black stone door, looking back with a bright smile, greatsword left on the floor` |
| `img/ev/threshold.webp` | 握られた手を離す | `a nun standing at a doorway she cannot cross, hands folded on her chest, smiling, dawn light on her face from beyond the door` |
| `img/ev/withered.webp` | 生還 | `a lone man seen from behind walking away across dawn hills, black withered footprints behind him` |

## 渡し方
`img/` フォルダごと zip にする。中の並びは上の表のとおり（`img/title.webp`、`img/bg/…`、`img/ch/…`、`img/ev/…`）。

## 優先順
少なく始めるなら、題字 → 人物の平常3枚 → 背景の `a1_street` `a2_street` `a3_house` `a4_nave` の順。
