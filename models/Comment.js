var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comments: {type: String},
	createdAt: {type: Date, default: Date.now},
	username: {type: String}
});

module.exports = mongoose.model('Comment', commentSchema);