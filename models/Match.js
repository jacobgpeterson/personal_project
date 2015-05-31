var mongoose = require('mongoose');

var rsvpSchema = new mongoose.Schema({
	userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	username: {type: String}
});

var commentSchema = new mongoose.Schema({
	userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comments: {type: String},
	createdAt: {type: Date, default: Date.now},
	username: {type: String}
});

var matchSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	sport: {type: String},
	game: {type: String},
	location: {type: String},
	city: {type: String},
	state: {type: String},
	date: {type: Date},
	additionalDetails: {type: String},
	rsvp: [rsvpSchema],
	comments: [commentSchema],
});

module.exports = mongoose.model('Match', matchSchema);