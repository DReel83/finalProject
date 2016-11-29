// require and call express.js
var express = require('express');
var app = express();

// home page (index.html) route
app.get('/', function(req, res){

});

// This route creates the shortened URL 
// and returns it as well.
app.post('/api/shorten', function(req, res){

});

// This routes redirects the user to the long URL
// associated with the short URL.
app.get('/:encoded_id', function(req, res){

});

// Create and define the sevrer
var server = app.listen(3000, function(){
	console.log("The server is now listening on port 3000");
});
