{
    /*settings*/
    var vers = "0.1";
    var uiSetting = new Window("palette","コンポジションサイズ変更");
    var s = buildUI();
    start();//scriptの起動

    //スタートアップスクリプト
    function start() {
        if (app.project != null) {
            if (app.project.items.length < 2) {
                alert("2つ以上のコンポジションを選択してください。");
            } else {
                var everyItem = app.project.items;                                          
                var thisManySelComps = 0;
                for (var i = everyItem.length; i >= 1; i--) {
                    item = everyItem[i];
                    if ((item instanceof CompItem) && item.selected) {
                        thisManySelComps++;
                    }
                }
                if ( (s != null) && (thisManySelComps > 1) ) {
                    s.show();   
                } else {
                    alert("2つ以上のコンポジションを選択してください");
                }
            }
        }
    }

    function Help() {
        //ヘルプ
        alert("選択しているコンポジションの幅と高さを変更するスクリプト\r" +
        "https://github.com/Kobutori/AEScript\r");
    }

    function buildUI() {
        //ポップアップの設定
        uiSetting.orientation = "row";
        uiSetting.ui_compWidth = uiSetting.add("edittext",[89,177,166,199],"幅");
        uiSetting.ui_compHeight = uiSetting.add("edittext",[89,177,166,199],"高さ");
        uiSetting.ui_btn = uiSetting.add("button",undefined,"変更");
        uiSetting.ui_btn.onClick = function () {doMain(this.parent);};
        uiSetting.ui_allbtn = uiSetting.add("button",undefined,"すべて変更");
        uiSetting.ui_allbtn.onClick = function () {doAllChange(this.parent);};
        uiSetting.ui_help = uiSetting.add("button",undefined,"ヘルプ");
        uiSetting.ui_help.onClick = function () {Help();};
        return uiSetting
    }

    function doMain(key_set) {
        var w = Math.floor(parseFloat(key_set.ui_compWidth.text));
        var h = Math.floor(parseFloat(key_set.ui_compHeight.text));
        if ( (h > 30000) || (h < 4) || (w > 30000) || (w < 4)) {
            //リミット設定。該当したらエラー吐く
            alert("4～30000の値で設定してください。");
        } else {
            var everyItem = app.project.items;
            app.beginUndoGroup("compChange");
            for (var i = everyItem.length; i >= 1; i--) {
                item = everyItem[i];
                if ((item instanceof CompItem) && item.selected) {
                    item.width = w;
                    item.height = h;
                }
            }
            app.endUndoGroup("compChange");
            alert("処理が完了しました。");
        }
    }
    function doAllChange(key_set){
        var w = Math.floor(parseFloat(key_set.ui_compWidth.text));
        var h = Math.floor(parseFloat(key_set.ui_compHeight.text));
        if ( (h > 30000) || (h < 4) || (w > 30000) || (w < 4)) {
            //リミット設定。該当したらエラー吐く
            alert("4～30000の値で設定してください。");
        } else {
            var everyItem = app.project.items;
            app.beginUndoGroup("compChange");
            for (var i = everyItem.length; i >= 1; i--) {
                item = everyItem[i];
                if ((item instanceof CompItem)) {
                    item.width = w;
                    item.height = h;
                }
            }
            app.endUndoGroup("compChange");
            alert("処理が完了しました。");
        }
    }
}