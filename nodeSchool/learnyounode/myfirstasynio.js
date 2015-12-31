var fs = require('fs');

var fileToRead = process.argv[2];

fs.readFile(fileToRead, 'utf-8', function(err, data){
   if (err){
       console.log('something broke');
          } else {
       var dataArray = data.split('\n');
       console.log(dataArray.length-1);
   }
});