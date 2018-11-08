(function aelib(){

    /*基盤*/
    app.$ = aelib;

    aelib.fn = aelib.prototype = {
        init: function(selector, context) {
            selector = selector || app;
        }
    }
    alert(app.$);

    /*アクセス系*/
    var selLayer = app.project.activeItem.selectedLayers[0];
    var 

    var aelCheckVersion = function(varsion){

    }





    function addC(){

    }



    //スクリプトによる書き込みが可能かどうか
    function　isSecurityPerfSet(){
        var securitySetting;
        securitySetting = app.preferences.getPrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY");
        return securitySetting ===1;
    }
    //alert(isSecurityPerfSet());
}());