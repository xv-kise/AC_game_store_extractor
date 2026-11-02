function copytext(text){
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy"); //非推奨だけど推奨の方法は権限の関係で使えない場合がある

    textarea.remove();
}

const url = window.location.href;
const selector_dic = {
"https://location\\.am-all\\.net/alm/location\\?gm=.*": "span.store_name", 
    //セガ (ALL.net)
"https://p\\.eagate\\.573\\.jp/game/facility/\
search/p/list\\.html\\?gkey=.*": "div.cl_shop_name",
    //コナミ (e-amusement)
"https://(essential-truth-92204\\.appspot\\.com/.*|\
bandainamco-am\\.co\\.jp/am/vg/(idolmaster-tours|jojols)/location/list\\?area=.*|\
wanganmaxi-official\\.com/wanganmaxi6rrplus/jp/locations/list\\?area=.*)": "dt",
    //ナムコ
"https://(pokemonfrienda\\.com|aipri.jp)\
/shop/search\\.html\\?key_word=&pref_id=.*": "h3.ttl--shopResult",
    //タカラトミー
"https://www\\.carddass\\.com/gundam-ab/location/list\\.php\\?p=1&pref=.*": "h5.shopName",
    //ガンダムアルセナルベース
"https://www\\.ganbalegends\\.com/shop/list\\.php\\?p=1&pref=.*": "dt.shopName",
    //仮面ライダーガンバレジェンズ
"https://www\\.dbsdv\\.com/shoplist/list\\.php\\?pref=.*": "h4.storeColName",
    //ドラゴンボールスーパーダイバーズ
"https://dcd\\.aikatsu\\.com/encore/shoplist/list\\.php\\?pref=.*": "h3.storeColName",
    //アイカツアンコール
"https://kancolle-arcade.net/ac/#/place": "div.fc-place-placename"
    //艦これ
};

let selector; 
for (const url_s of Object.keys(selector_dic)){ 
    if (RegExp(url_s).test(url)){
        selector = selector_dic[url_s];
    }
}
if (selector === undefined){
    alert("未対応サイト");
} 
else {
    let shopnames = [];
    for (const shop of document.querySelectorAll(selector)){
        let shopn = shop.textContent;
        shopnames.push(shopn + (shopn.at(-1) == "店" ? "" : "*")); //店名の表記揺れ対策　場合に応じて * を「店」に置き換えたり消したりしよう
    }
    t1 = shopnames.join("\n");
    console.log(t1);
    copytext(t1);
    alert("copied");
}
