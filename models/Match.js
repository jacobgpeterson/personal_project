var mongoose = require('mongoose');

var matchSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	sport: {type: String},
	location: {type: String},
	city: {type: String},
	state: {type: String},
	date: {type: Date},
	additionalDetails: {type: String}
});

module.exports = mongoose.model('Match', matchSchema);