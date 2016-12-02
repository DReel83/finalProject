//Here the alphabet that will be used for the shortened URL is defined. 
// I left out 0,O,I to avoid confusion aon the users end.
var alphabet = "123456789abcdefghjkmnopqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";

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
  return encoded;	
}

//The decoding function converts the short URL into it's base10 
//equivalent so the long URL can be retrieved from th DB.

