// 手記。各行は、seen に挙げた場面のどれかを一度でも見ると書き加えられる。
(function (sc) {
  sc.codex = [
    { id: 'self', title: '私', lines: [
      { id: 'self1', seen: ['wake'], t: '名前がない。なぜここに倒れていたのかも分からない。右の掌に、目に似た印がある。' },
      { id: 'self2', seen: ['hospice_tend_shift'], t: '修道女は私を「司祭長さま」と呼んだ。頭は覚えていない。掌が返事をした。' },
      { id: 'self3', seen: ['gatehouse'], t: '門の鍵を地下へ移させたのは「司祭長」だ。門番は、日誌の最後を「お赦しを」で埋めて消えた。' },
      { id: 'self4', seen: ['hospice_truth'], t: '私は、街の女の中から七人を選んだ。街を救う儀式だと告げ、選ばれるのは誉れだと告げた。' },
      { id: 'self5', seen: ['cellar_slow', 'hospice_kill'], t: '死者に布を掛ける手順も、刃の入れ方も、指が知っていた。' },
      { id: 'self8', seen: ['basin'], t: '水盤の水は記憶を消す。前にも飲んだ。記憶は奪われたのではない。自分で捨てたのだ。' },
      { id: 'self6', seen: ['b_ledger'], t: '儀式は、街を救うためのものではなかった。七人の命は、私の体に注がれた。私は朽ちない。代わりに、街が朽ちている。' },
      { id: 'self7', seen: ['b_ledger'], t: '呪いの源は、この掌の内側にある。私が街を出れば、呪いも一緒に街を出る。' }
    ] },
    { id: 'deeds', title: '私のしたこと', lines: [
      { id: 'd1', seen: ['gate_drink'], t: '渇いた女の目の前で、最後の水を飲んだ。うまかった。' },
      { id: 'd1b', seen: ['gate_beggar'], t: '最後の水を、渇いた女に与えた。' },
      { id: 'd5', seen: ['hospice_draught'], t: '差し出された薬湯を飲み、イレーネの胸で休んだ。' },
      { id: 'd2', seen: ['truth_alone'], t: '鍵を握る指を一本ずつほどいて、イレーネを置いてきた。' },
      { id: 'd3', seen: ['truth_together'], t: 'イレーネを連れ出した。助けたいのか、盾が欲しいのか、区別はつかなかった。' },
      { id: 'd4', seen: ['hospice_kill'], t: 'イレーネを刺した。手は震えなかった。' },
      { id: 'd14', seen: ['end_lethe'], t: '水盤の水を飲んで、すべてを忘れた。' },
      { id: 'd6', seen: ['b_irene_silence'], t: 'イレーネの口を、唇が切れるほど強く塞いだ。' },
      { id: 'd7', seen: ['b_irene_wait'], t: '迎えに行くと言って、イレーネを祠に待たせた。' },
      { id: 'd15', seen: ['b_irene_shield'], t: 'イレーネが斬られるのを止めなかった。倒れてくる体を、抱きとめなかった。' },
      { id: 'd8', seen: ['b_blood_lie'], t: '袖の血を、獣の血だと偽った。' },
      { id: 'd9', seen: ['b_hairpin'], t: '妹の髪飾りを、拾った場所を偽ってヒルデに渡した。礼を言われた。' },
      { id: 'd13', seen: ['b_clear_escort'], t: '正体を隠したまま、ヒルデの背に守られて橋を渡った。' },
      { id: 'd10', seen: ['b_beasts'], t: '獣を呼んで、ヒルデを喰わせた。' },
      { id: 'd11', seen: ['b_clear_blade'], t: 'ヒルデを刺した。' },
      { id: 'd12', seen: ['b_clear_king'], t: '印を掲げ、獣の王として橋を渡った。' }
    ] },
    { id: 'mark', title: '掌の印', lines: [
      { id: 'mark1', seen: ['gate'], t: '北の門の鍵穴に、掌の印と同じ意匠が彫られている。' },
      { id: 'mark6', seen: ['gate_beggar'], t: '水を与えた女は、掌を見た途端、礼も言わずに逃げた。街の者は、この印を知っている。' },
      { id: 'mark2', seen: ['alley_light'], t: '路地の獣が怯えたのは、灯りではなく、灯りを持つ掌だったのかもしれない。' },
      { id: 'mark3', seen: ['cellar_grab'], t: '地下の死者の手は、印に触れた途端、焼けたように引っこんだ。' },
      { id: 'mark4', seen: ['b_door'], t: '屠殺場の封印には、私の右手と同じ大きさの窪みがある。' },
      { id: 'mark4b', seen: ['b_door_open'], t: '印を当てると、封印は自分からほどけた。この街は、まだ私に従う。' },
      { id: 'mark5', seen: ['b_ledger'], t: '獣は印に従う。あれらは、私から溢れたものだからだ。' }
    ] },
    { id: 'seven', title: '七人', lines: [
      { id: 'seven1', seen: ['cellar'], t: '施療院の地下に、布を掛けた台が七つある。どれも小柄だ。' },
      { id: 'seven2', seen: ['hospice_truth'], t: '七人は、私が選んだ。イレーネは選ばれなかった。' },
      { id: 'seven3', seen: ['b_talk'], t: '七人の一人は、狩人ヒルデの妹エルザ。小さくて、歌がうまかった。誉れだと笑って出ていった。' },
      { id: 'seven4', seen: ['b_abattoir'], t: '屠殺場には鉤が七つ、溝が七本。溝はすべて、中央の寝台へ流れこむ。' },
      { id: 'seven5', seen: ['b_hooks'], t: '四つ目の鉤の下に、エルザの髪飾りが落ちていた。' }
    ] },
    { id: 'irene', title: 'イレーネ', lines: [
      { id: 'i1', seen: ['hospice'], t: '施療院の修道女。何日も眠っていない。初対面で私の掌を見て、目を逸らした。' },
      { id: 'i2', seen: ['hospice_draught', 'end_home'], t: '彼女の薬湯は傷を消し、足を縛る。彼女自身も、同じ椀から飲んでいる。' },
      { id: 'i3', seen: ['hospice_truth'], t: '彼女は選ばれなかった。だから、次こそ選ばれるのを待っていた。' },
      { id: 'i4', seen: ['hospice_mad', 'end_devotion', 'end_devotion_road', 'end_embrace'], t: '五つ目の鐘で壊れる。壊れた彼女は、私の体から「悪いもの」を取り出そうとする。何が入っているのかを、知っている。' },
      { id: 'i5', seen: ['hospice_kill'], t: '刃を入れたとき、彼女は「ありがとうございます」と言った。' },
      { id: 'i6', seen: ['b_irene_shield'], t: '彼女は私の名を告げ、私の代わりに斬られた。' }
    ] },
    { id: 'hilde', title: 'ヒルデ', lines: [
      { id: 'h1', seen: ['b_camp'], t: '屠殺場通りの女狩人。出会い頭に、両手を見せろと言う。' },
      { id: 'h2', seen: ['b_end_mark', 'b_end_unwrap', 'b_talk'], t: '掌に印のある男、司祭長を殺すために街に残っている。顔は知らない。' },
      { id: 'h3', seen: ['b_talk'], t: '妹のエルザを、あの夜に選ばれた。' },
      { id: 'h4', seen: ['b_join', 'b_end_hunt', 'b_fire_mad'], t: '五つ目の鐘を過ぎると、獣と人の区別がつかなくなる。本人も、それを知っている。' },
      { id: 'h5', seen: ['b_rest'], t: '一枚の毛皮で、私を抱えて眠らせた。妹もこうしないと寝なかった、と言った。' },
      { id: 'h6', seen: ['b_hairpin'], t: '髪飾りを渡すと、声を出さずに泣いた。私を「いい奴」と呼んだ。' }
    ] },
    { id: 'town', title: '街と鐘', lines: [
      { id: 't1', seen: ['gatehouse'], t: '「鐘五つを過ぎて外に出るな。あれらは鐘で変わる」。門番の日誌より。' },
      { id: 't3', seen: ['end_alley', 'alley_light'], t: '路地の獣は、もとは人だ。首に祈りの数珠を掛けている。' },
      { id: 't2', seen: ['b_wake'], t: '街は区画ごとに門で仕切られ、区画ごとに違う鐘が鳴る。' },
      { id: 't4', seen: ['b_end_bridge'], t: '大橋の群れは、鐘が鳴るたびに餌場へ引く。' },
      { id: 't5', seen: ['b_ledger'], t: '儀式の対価は「土地が払う」。街が朽ちているのは、そのためだ。' }
    ] }
  ];

  // 第三区画の追記
  const sec = id => sc.codex.find(s => s.id === id).lines;
  sec('self').push(
    { id: 'self9', seen: ['v_truth'], t: 'ヴィオラは私の愛人だった。七人の名簿を作ったのは彼女で、選んだのは私だ。' },
    { id: 'self10', seen: ['v_truth'], t: '記憶は、私が頼んで消させた。泉の水を飲むのは、これで四度目だった。' });
  sec('deeds').push(
    { id: 'd20', seen: ['v_bribe'], t: 'ヴィオラに借りを作って、ヒルデの前で口止めをした。' },
    { id: 'd21', seen: ['v_blood'], t: '通行証のために、血を売った。' },
    { id: 'd22', seen: ['v_night'], t: 'ヴィオラの客として、一夜を過ごした。' },
    { id: 'd23', seen: ['v_offer'], t: '通行証と引き換えに、イレーネを館に置いてきた。彼女は、選ばれたと信じていた。' },
    { id: 'd24', seen: ['v_steal_irene'], t: 'イレーネを囮にして、通行証を盗んだ。' },
    { id: 'd25', seen: ['v_seal'], t: '体を譲るという証文に、印を押した。' },
    { id: 'd26', seen: ['v_stab'], t: 'ヴィオラを刺した。三度目だと言われた。' },
    { id: 'd27', seen: ['v_cut'], t: 'ヒルデに命じて、ヴィオラを斬らせた。' },
    { id: 'd28', seen: ['v_water_hilde'], t: '眠るヒルデに泉の水を飲ませ、復讐も妹も忘れさせた。' },
    { id: 'd30', seen: ['v_implant1'], t: '何も覚えていないヒルデに、私の護衛だったと教えた。' },
    { id: 'd31', seen: ['v_implant2'], t: '誰よりも私を尊敬していた、と吹き込んだ。' },
    { id: 'd32', seen: ['v_implant3'], t: '自分の命より私の命を大切にしていた、と吹き込んだ。' },
    { id: 'd29', seen: ['v_water_irene'], t: 'イレーネに泉の水を飲ませようとして、できなかった。手放せなかった。' },
    { id: 'd33', seen: ['v_clear_rite'], t: '嘘で作った忠誠と、赦さないという愛を従えて、最後の門を通った。' });
  sec('seven').push({ id: 'seven6', seen: ['v_truth'], t: '七人の名簿を作ったのは、ヴィオラだ。' });
  sec('irene').push(
    { id: 'i7', seen: ['v_inn_irene'], t: '下の鐘が届かない場所では、彼女は彼女のままでいられる。' },
    { id: 'i8', seen: ['v_offer'], t: '八人目として館に残った。嬉しそうに、最後まで振り返っていた。' },
    { id: 'i10', seen: ['v_clear_irene', 'v_clear_both', 'v_clear_blank'], t: '門番に問われて「このお方に、罪などございません」と答えた。赦しきっている者には、罪を預けられない。' },
    { id: 'i9', seen: ['v_water_irene'], t: '私が瓶を渡せないのを見て、喜びに震えた。水を床に捨て、「決して赦してさしあげません」と言った。' });
  sec('hilde').push(
    { id: 'h7', seen: ['v_confess', 'v_named_ok'], t: '正体を知っても、斬れなかった。「知らないふりをしてた」と言った。' },
    { id: 'h8', seen: ['v_end_verdict'], t: '私が自分で忘れたと知ると、迷わず斬った。「あたしが覚えてる」と言った。' },
    { id: 'h9', seen: ['v_water_hilde'], t: '泉の水で、すべてを忘れた。剣の握り方だけが残った。' },
    { id: 'h11', seen: ['v_clear_leash', 'v_clear_both', 'v_clear_hilde'], t: '復讐を覚えているかぎり、彼女は私のために「死ねる」とは答えない。' },
    { id: 'h12', seen: ['v_clear_blank', 'v_implant1'], t: '白紙の彼女は、教えられたぶんしか答えられない。護衛なら守るだけ。尊敬なら迷う。' },
    { id: 'h10', seen: ['v_implant3'], t: '「あんたのために死ねる。それだけ分かってれば、ほかは何も要らない」と笑った。' });
  sc.codex.splice(sc.codex.findIndex(s => s.id === 'town'), 0, { id: 'viola', title: 'ヴィオラ', lines: [
    { id: 'v1', seen: ['v_house'], t: '灯の館の女主人。初めて会う、と言った。その前に一瞬、懐かしいものを見る目をした。' },
    { id: 'v2', seen: ['v_end_lamp', 'v_truth', 'v_mask', 'v_mask_named'], t: '初対面は嘘だ。彼女は最初から、私が誰かを知っている。' },
    { id: 'v3', seen: ['v_mask', 'v_seal', 'v_truth'], t: '狙いは、私の朽ちない体を自分に移すこと。' },
    { id: 'v4', seen: ['v_mask', 'v_mask_named'], t: '五つ目の鐘で、嘘をつくのをやめる。' },
    { id: 'v5', seen: ['v_end_lamp'], t: '逆らえば、血を抜かれ続ける。朽ちない体は、尽きない油になる。' },
    { id: 'v7', seen: ['v_fill'], t: '泉の水は誰が飲んでも同じように効く、と彼女は笑った。眠っている唇に含ませるだけでも。' },
    { id: 'v6', seen: ['v_stab'], t: '私に刺されるのは三度目だ、と言った。' }
  ] });
  sec('town').push(
    { id: 't8', seen: ['v_gate'], t: '最後の門の決まり。「司祭長は、二人の供を従えて入る。剣を捧げた者と、罪を預かる者」。' },
    { id: 't9', seen: ['v_gate'], t: '門番は供に問う。剣を捧げた者には「この者のために死ねるか」。罪を預かる者には「この者の罪を預かるか」。' },
    { id: 't6', seen: ['v_blood', 'v_end_lamp'], t: '灯の館の赤い灯は、客の血で燃えている。' },
    { id: 't7', seen: ['v_spring'], t: '下の広場の水盤は、灯の館の地下の泉から引かれている。' });

  // 最終区画の追記
  sec('self').push(
    { id: 'self11', seen: ['w_letter1'], t: 'ここへ来るのは五度目だ。過去の私は、四度とも、ここで水を飲んだ。' },
    { id: 'self12', seen: ['w_letter2'], t: '過去の私は、三人を揃えても捨てられなかった。「お前は、私より酷い男であれ」と書き残した。' });
  sec('deeds').push(
    { id: 'd40', seen: ['w_viola1_y', 'w_viola2_y', 'w_viola_go'], t: '二人を待たせて、ヴィオラに溺れた。' },
    { id: 'd41', seen: ['w_hilde_hold', 'w_hilde_obey'], t: '何でも言うことを聞くヒルデで、欲を満たした。' },
    { id: 'd42', seen: ['w_irene1_y'], t: 'イレーネの膝に、決めることを預けた。' },
    { id: 'd43', seen: ['w_hilde_dose'], t: '思い出しかけたヒルデに、もう一度水を飲ませた。' },
    { id: 'd44', seen: ['w_hilde_doll'], t: '二度目の水で、ヒルデを人形にした。' },
    { id: 'd45', seen: ['w_promise'], t: 'イレーネに、八人目にすると偽りの約束をした。' },
    { id: 'd46', seen: ['w_anchor'], t: 'ヴィオラを騙して祭壇に上げ、扉の錨にした。' },
    { id: 'd47', seen: ['w_sword'], t: 'ヒルデに「扉に入れ」と命じた。彼女は笑って入った。' },
    { id: 'd48', seen: ['f_eighth'], t: 'イレーネを使って、儀式をもう一度やった。何も変わらないと知っていて。' },
    { id: 'd49', seen: ['t_true'], t: 'イレーネの手を離し、三人を代価にして、独りで街を出た。' });
  sec('irene').push(
    { id: 'i11', seen: ['w_jealous_v', 'w_jealous_h'], t: '私がほかの女に触れるたびに、彼女は数えている。二度までと決めている。三度目の前に、相手を片づける。' },
    { id: 'i12', seen: ['w_irene1_y'], t: '彼女に預けると、彼女の数える手は止まる。その代わり、足が彼女から離れなくなる。' },
    { id: 'i13', seen: ['f_contempt'], t: '悔いる男、赦されたがる男、決めることを委ねる男を、彼女は侮蔑する。' });
  sec('hilde').push(
    { id: 'h13', seen: ['w_hilde1', 'w_hilde2'], t: '妹の名と子守歌で、思い出しかける。嘘は一度、水は一度まで効く。' },
    { id: 'h14', seen: ['w_hilde_hold', 'w_hilde_obey'], t: '抱くたびに、体のほうが思い出していく。三度目で、全部繋がる。' });
  sec('viola').push(
    { id: 'v8', seen: ['v_blood', 'v_night', 'v_steal_hilde', 'v_steal_irene'], t: '彼女は、最後の門の向こうまで追ってくるつもりだ。' },
    { id: 'v9', seen: ['w_viola1'], t: '大聖堂まで追ってきた。「あの二人は片づけてあげる。あなたは何も決めなくていい」と誘う。' });
  sec('town').push(
    { id: 't10', seen: ['w_letter1', 'f_noanchor'], t: '大聖堂の奥の扉は、三つの代価を取る。器の錨、捧げられた剣、預けられた罪。' },
    { id: 't11', seen: ['w_letter2'], t: '錨には、器を欲する者を据える。剣は自分の足で扉に入る。罪を預かる者は敷居を越えられない。誰も連れては出られない。' },
    { id: 't12', seen: ['f_bell'], t: '大聖堂の鐘が五つ鳴ると、ヒルデは思い出し、イレーネは壊れる。' });
})(typeof module !== 'undefined' ? require('./scenario.js') : SCENARIO);
