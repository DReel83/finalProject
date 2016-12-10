// The follow will be responsible for storing connection infomation
//as well as the shortener host.

var config = {};

config.db = {};
//
config.webhost = 'http://localhost:3000/';

//MongoDB host and DB name
config.db.host = 'localhost';
config.db.name = 'url_shortener';

// Export to make available
 module.exports = config;
