// The url library allows us to parse parts of the request url.
var url = require("url");
var http = require("http");
var util = require("util");

const PORT = 7000;


var server = http.createServer(handleRequest);



// Lets start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

