var fs = require('fs');
var path = require('path');
var  directoryToRead = process.argv[2];
var whatToFilterBy = "." + process.argv[3];


fs.readdir(directoryToRead, function(err, list){
    if(err){
        console.log("it broke!");
    } else {
        for (var i = 0; i <list.length; i++){
            if (path.extname(list[i]) === whatToFilterBy){
                console.log(list[i]);
            }
        }
    }
});
