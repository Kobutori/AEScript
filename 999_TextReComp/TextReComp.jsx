//文字をバラバラにするスクリプト
//ToDo:セッティング～起動までの型を作る。

//セッティング
var uiPalette = new Window("palette","コンポジションサイズ変更");
var s = buildUI();
start();//scriptの起動

//スタート
function start() {
    s.show();
}

function buildUI() {
    //ポップアップの設定
    uiPalette.orientation = "row";
    uiPalette.ui_preName = uiPalette.add("edittext",[89,177,166,199],"コンポの名前");
    uiPalette.ui_btn = uiPalette.add("button",undefined,"バラバラにする");
    uiPalette.ui_btn.onClick = function () {doMain(this.parent);};
    return uiPalette
}

//main
function doMain(key_set) {
    var preconName = key_set.ui_preName.text;
    comp = app.project.activeItem.selectedLayers[0];
    var t = comp.text.sourceText.value.toString();
    var beforeText = t.split('');
    var afterText = '';
    var textCount = [];
    app.beginUndoGroup("textReComp");
    for (var i = 0; i < beforeText.length; i++) {
        afterText = beforeText[i];
        app.project.item(1).layers.addText(afterText);
        textCount.push(i+1);
    }
    app.project.item(1).layers.precompose(textCount, preconName, true);
    app.endUndoGroup("textReComp");
    alert("処理が完了しました。");
}
