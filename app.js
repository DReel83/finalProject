// require and call express.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Handles JSON 
app.use(bodyParser.json());

//Handles encoded URL's
app.use(bodyParser.urlencoded({ extended: true }));

// The path module is used to concatenate the paths.
var path = require('path');

//The following instructs Express to serve the from
// the designated directory.
app.use(express.static(path.join(__dirname, 'public')));

// home page (index.html) route
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'views/index.html'));
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
