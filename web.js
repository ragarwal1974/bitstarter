var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var infile = "index.html";
var buffer = new Buffer(50);

app.get('/', function(request, response) {
  fs.readFileSync(infile, buffer);
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
