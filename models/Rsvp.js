var mongoose = require('mongoose');

var rsvpSchema = new mongoose.Schema({
	userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	username: {type: String}
});

module.exports = mongoose.model('Rsvp', rsvpSchema);