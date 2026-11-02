[アーケードゲーデータベース](https://docs.google.com/spreadsheets/d/1m_wgYfj_t8oI415uksYt4pEN5w69Jf1ZAhZ27XlqEUA/edit?usp=sharing) の作成のために書いたコード

## 使い方

chushutsu.js をF12のコンソールで実行するか、chushutsu_bml.jsをブックマークレットとして保存することで使える

各種ACゲームの設置店舗情報のページで使うと店舗名一覧が改行区切りでログ出力・コピーされる

「店」で終わらないものには店名に * が付く（「ラウンドワン金沢店」と「ラウンドワン金沢」のような店名の表記揺れに気づきやすくするための自分用機能）

例 ([石川県のBeatmania IIDXの設置店舗](https://p.eagate.573.jp/game/facility/search/p/list.html?gkey=IIDX&paselif=false&area=AR-03&pref=JP-17&finder=area)) : 
```
ベティ*
バイパスレジャーランド加賀店
バイパスレジャーランド御経塚店
アピナ野々市店
ラウンドワン金沢店
金沢メトロポリス*
タイトーステーション金沢店
バイパスレジャーランド藤江新館*
```

HTMLから特定の要素を抽出しているだけなので、複数ページある場合はそれぞれに移動して実行する必要がある

URLの形式やサイトのレイアウトの変更で使えなくなる可能性が大いにある

## 対応サイト
* https://location.am-all.net/alm/location/ (セガ各機種）
* https://p.eagate.573.jp/game/facility/search/p/ (コナミ各機種)
* https://aipri.jp/shop/ (アイプリ)
* https://bandainamco-am.co.jp/am/vg/idolmaster-tours/location/ (アイドルマスターツアーズ)
* https://bandainamco-am.co.jp/am/vg/jojols/location/ (ジョジョの奇妙な冒険 ラストサバイバー)
* https://essential-truth-92204.appspot.com/mk3/ (マリオカート アーケードグランプリ)
* https://essential-truth-92204.appspot.com/S12/ (太鼓の達人)
* https://dcd.aikatsu.com/encore/shoplist/ (アイカツ！アンコール)
* https://kancolle-arcade.net/ac/#/place (艦これアーケード）
* https://pokemonfrienda.com/shop/ (ポケモンフレンダ)
* https://wanganmaxi-official.com/wanganmaxi6rrplus/jp/locations/ (湾岸ミッドナイト)
* https://www.carddass.com/gundam-ab/location/list.php (ガンダムアーセナルベース）
* https://www.dbsdv.com/shoplist/list.php (ドラゴンボールスーパーダイバーズ)
* https://www.ganbalegends.com/shop/list.php (仮面ライダーガンバレジェンズ)
