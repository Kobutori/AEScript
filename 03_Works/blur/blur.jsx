
var myWin = new Window("palette", "title");

var addBtn = myWin.add("button",undefined,"ブラーをかける");
addBtn.onClick = function(){

var test = app.project.activeItem.selectedLayers[0]

var pricomp = app.project.activeItem.layers.precompose([test.index],"ブラー調整","true");

var thirdLayer = app.project.activeItem.selectedLayers[0].source.layer(1);
//複製
thirdLayer.duplicate();
var fx01 = app.project.activeItem.selectedLayers[0].source.layer(1);
//エフェクト
var FX = fx01("Effects").addProperty("ブラー(滑らか)");
FX(1).setValue(50);
FX(3).setValue(1);

fx01("opacity").setValue(60);

//var nameraka = app.project.activeItem.selectedLayer.source.layer(0);
//("Effects").addproperty("ブラー（滑らか）")

   }
myWin.show();
