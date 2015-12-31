
var mymodule = require('./makeitmodular');
var dir = process.argv[2];
var extFilter = process.argv[3];
mymodule(dir, extFilter, function(err, list){
    if(err){
        return console.error("Shit broke everywhere!");
    }
    list.forEach(function(file){
        console.log(file);
    })
});