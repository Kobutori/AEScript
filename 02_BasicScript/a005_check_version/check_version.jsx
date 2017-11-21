var checkVer =function(version){
    return parseFloat(app.version) >= version;
}
alert (app.version);
alert(checkVer(10.5));