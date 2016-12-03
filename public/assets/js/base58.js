//Here the alphabet that will be used for the shortened URL is defined. 
// **ignore***I left out 0,O,I to avoid confusion aon the users end.
var alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Here to length of the alphabet is used for the base.
var base = alphabet.length;

//The encoding function below will convert the database unique ID (base10) into
//the base58 string that will create a shorter URL.

function encode(num){
	var encoded = "";
	while (num){
		var remainder = num % base;
		num = Math.floor(num / base);
		encoded = alphabet[remainder].toString() + encoded;
	}
	console.log(encoded);
	return encoded;
}

//The decoding function converts the short URL into it's base10 integer 
//equivalent so the long URL can be retrieved from th DB.

function decode(str) {
	var decoded = 0;
	while (str){
		var index = alphabet.indexOf(str[0]);
	    var power = str.length -1;
	    decoded += index * (Math.pow(base, power));
	    str = str.substring(1);
	}
	console.log(decoded);
	return decoded;
}

// Eport functionn for use in app.js
module.exports.encode = encode;
module.exports.decode = decode;
