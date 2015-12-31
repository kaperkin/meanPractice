// require built in node library of http at the beginning of vanilla node server scripts
var http = require("http");

//specify which port to listen on. const creates a variable that cannot be reinitialized to be something else
const PORT = 8080;

// request listener
function handleRequest(request, response){
    response.end("this is a node sever request handler " + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Woot! Server listening on: http://localhost:%s", PORT);
});