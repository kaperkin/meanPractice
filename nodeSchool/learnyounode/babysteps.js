var params = process.argv;
function sumArgv(params){
    var sum = 0;
    for (var i = 2; i< params.length; i++){
        sum += Number(params[i]);
    }
    console.log(sum);
}

sumArgv(params);