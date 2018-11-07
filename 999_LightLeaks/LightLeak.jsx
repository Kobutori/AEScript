{
    var actComp = app.project.activeItem;

    function randRange(min,max){
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        return rand;

    }
    function LightLeakBasic(){
        var LightLeakNull = actComp.layers.addSolid([0, 0, 0], "LightLeaks", 2000, 1500, 1.0);
        actComp.layer(1).blendingMode = BlendingMode.ADD;
        var fractalNoize;
        fractalNoize = LightLeakNull.property("ADBE Effect Parade").addProperty("ADBE Fractal Noise");
        fractalNoize.property("ADBE Fractal Noise-0001").setValue(8);
        fractalNoize.property("ADBE Fractal Noise-0002").setValue(4);
        fractalNoize.property("ADBE Fractal Noise-0004").setValue(randRange(150,300));
        fractalNoize.property("ADBE Fractal Noise-0005").setValue(-50);
        fractalNoize.property("ADBE Fractal Noise-0010").setValue(randRange(1200,1600));//
        fractalNoize.property("ADBE Fractal Noise-0015").setValue(1);//複雑度
        fractalNoize.property("ADBE Fractal Noise-0023").expression = "time*"+randRange(100,300);
        //setValue()
    }

    if(actComp != null){
        LightLeakBasic();
    }
}