// require and call express.js
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path       = require('path');
var mongoose   = require('mongoose');
var config     = require('./config.js');
var base58     = require('./base58.js');
var Url        = require('./models/url.js');

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);


//Handles JSON 
app.use(bodyParser.json());

//Handles encoded URL's
app.use(bodyParser.urlencoded({ extended: true }));

//The following instructs Express to serve the from
// the designated directory.
app.use(express.static(path.join(__dirname, 'public')));

// home page (index.html) route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// // home page (index.html) route
// app.get('/', function(req, res){
// 	res.sendFile(path.join(__dirname, 'views/signup.html'));
// 	//console.log(res);
// });

// This route creates the shortened URL 
// and returns it as well.
app.post('/api/shorten', function(req, res){
  var longUrl = req.body.url;
  var shortUrl = '';

// Looks for preexisting URLs in the db
  Url.findOne({long_url: longUrl}, function (err, doc){
    if (doc){
      shortUrl = config.webhost + base58.encode(doc._id);

			res.send({'shortUrl': shortUrl});
    } else {

			var newUrl = Url({
        long_url: longUrl
      });

			newUrl.save(function(err) {
        if (err){
          console.log(err);
        }

        shortUrl = config.webhost + base58.encode(newUrl._id);

        res.send({'shortUrl': shortUrl});
      });
    }

  });

});

// This routes redirects the user to the long URL
// associated with the short URL.
app.get('/:encoded_id', function(req, res){

	var base58Id = req.params.encoded_id;

  var id = base58.decode(base58Id);

	//Checks for prexiting URL
	Url.findOne({_id: id}, function (err, doc){
    if (doc) {
      res.redirect(doc.long_url);
    } else {
      res.redirect(config.webhost);
    }
  });

});

// Create and define the sevrer
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	console.log("The server is now listening on port " + server.address().port);
});
