var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// The folllowing creates the counter schema with two fields
// _id and seq 
var CounterSchema = Schema({
	_id: {type: String, required: true},
	seq: {type: Number, defualt: 0}
});

//Here a model from the above schema is created
var counter = mongoose.model('counter', CounterSchema);

//A schema for the links is also created bellow.
var urlSchema = new Schema({
	_id: {type: Number, index: true},
	longUrl: String,
	created_at: Date
});

//The following runs a callback before each url is saved to the collection
urlSchema.pre('save', function(next){
	var doc = this;
	//Here the url_count is found and incremented by one.
	counter.findByIdAndUpdate({_id: 'url_Count'}, {$inc: {seq: 1}}, function(error, counter){
		if (error)
			return next(error);
		//Here the _id is set to the incremented value of the counter for th url collection.
		doc._id = counter.seq;
		doc.created_at = new Date();
		next();
	});
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;