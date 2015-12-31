var fs = require('fs');
var filetoread= process.argv[2];

var buffer = fs.readFileSync(filetoread);

var bufferString = buffer.toString();
var bufferSplit = bufferString.split('\n');
console.log(bufferSplit.length-1);

