{
    var actComp = app.project.activeItem;

    //ランダムな整数を返す
    function randRange(min,max){
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        return rand;
    }

    function LightLeakBasic(){
        var LightLeakNull = actComp.layers.addSolid([0, 0, 0], "LightLeaks", 2000, 1500, 1.0);//平面の作成
        var fractalNoize;
        
        actComp.layer(1).blendingMode = BlendingMode.ADD;//描画モードの変更（加算）
        fractalNoize = LightLeakNull.property("ADBE Effect Parade").addProperty("ADBE Fractal Noise");//エフェクトフラクタルノイズの追加
        fractalNoize.property("ADBE Fractal Noise-0001").setValue(8);//フラクタルノイズの種類の変更　ダイナミック（プログレッシブ）
        fractalNoize.property("ADBE Fractal Noise-0002").setValue(4);//ノイズの種類を　スプラインに変更
        fractalNoize.property("ADBE Fractal Noise-0004").setValue(randRange(150,300));//　コントラストを150～300の間でランダムに
        fractalNoize.property("ADBE Fractal Noise-0005").setValue(-50);//明るさを-50に
        fractalNoize.property("ADBE Fractal Noise-0010").setValue(randRange(1200,1600));//スケールを1200～1600の間でランダムに
        fractalNoize.property("ADBE Fractal Noise-0015").setValue(1);//複雑度を1に
        fractalNoize.property("ADBE Fractal Noise-0023").expression = "time*"+randRange(100,300);//展開のエクスプレッションを100～300の間でランダムに
        //setValue()
    }

    if(actComp != null){
        LightLeakBasic();
    }else{
        alert("コンポを選択してください");
    }
}