var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = new mongoose.Schema({
	email: {type: String, unique: true},
	username: {type: String, unique: true},
	password: {type: String},
	token: {type: String},
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, 10);
};

module.exports = mongoose.model('User', userSchema);