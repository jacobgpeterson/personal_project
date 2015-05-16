var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	comment: {type: String},
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', commentSchema);