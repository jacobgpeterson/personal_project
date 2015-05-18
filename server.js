// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var multer = require('multer');
var Comment = require('./models/Comment');
var Match = require('./models/Match');
var User = require('./models/User');

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};
// Controllers
// var SightingCtrl = require('./controllers/SightingCtrl');
// var UserCtrl = require('./controllers/UserCtrl');
// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(multer());

// Endpoints
app.post('/match', function(req, res){
	var newMatch = new Match(req.body);
	console.log(newMatch);
	newMatch.save( function(err, result) {
      if (err) {return res.status(500).send(err);}
      res.send(result);
  	});
});
app.get('/find/:sport', function(req, res){
	var sport = req.params.sport;
	Match.find({'sport' : sport}, function(err, matches){
		if (err) {
			res.send(err);
		} else{
  			res.send(matches);
  		}
	})
});
app.get('/view/:id', function(req, res){
	var id = req.params.id;
	
	var ObjectId = mongoose.Types.ObjectId;
	Match.find({ "_id" : id.toObjectId() }, function(err, match){
		if (err) {
			res.send(err);
		} else{
  			res.send(match);
  		}
	}) 
});

// Connections
var port = 9091;
var mongoUri = 'mongodb://localhost:27017/pickUpApp';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(err, db) {
	if(!err) {
    console.log('Connected to MongoDB at ', mongoUri);
  }
  
});

app.listen(port);