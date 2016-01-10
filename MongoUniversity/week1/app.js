var http = require('http');

var server = http.createServer(callback);

function callback(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello world\n');
}

server.listen(8000);

