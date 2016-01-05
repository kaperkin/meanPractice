"use strict";

var selectDB = function(port, dbName){
    if(!port){
        port = 27017;
    }
    if(!dbName){
        dbName = "test_1";
    }
    var db = connect("localhost:" + port + "/" + dbName);
    return db;
};