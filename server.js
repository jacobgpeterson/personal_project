// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var secret = '20h@0vah%9vhq30944&0204!';

var apiRoutes = express.Router(); 
var Comment = require('./models/Comment');
var Match = require('./models/Match');
var User = require('./models/User');

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

// Express
var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
apiRoutes.use(function(req, res, next){
	var token = req.body.token || req.params.token;
	if (token) {
		jwt.verify(token, secret, function(err, decoded) {      
      		if (err) {
        		return res.json({ success:false, message: 'Failed to authenticate token.' });    
      		} else {
        		req.decoded = decoded;    
        		next();
      		}
    	});
    };
});

// Endpoints
app.post('/user', function(req, res){
	var newUser = new User(req.body);
	newUser.password = newUser.generateHash(newUser.password);
	newUser.save(function(err, result){
		if (err) {return res.status(500).send(err);}
    	res.send(result);
	});
});
app.post('/login', function(req, res){
	User.findOne({
		username: req.body.username
	}, function(err, user){
		if (err) throw err;

		if (!user) {
			res.status(401).json({ success: false, message: 'Authentication failed. User or password not found.'});
		} else{
			bcrypt.compare(req.body.password, user.password, function(err, match){
				if (match){
					var token = jwt.sign(user._id, secret, {
					expiresInMinutes: 1440
					});
					res.status(200).json({
						success: true,
						message: 'Token Success!',
						token: token,
					});
				} else {
					res.status(401).json({ message: 'Authentication failed. User or password not found.'});
				}
			}); 
		};
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
	Match.findOne({ "_id" : id.toObjectId() }, function(err, match){
		if (err) {
			res.send(err);
		} else{
			User.findOne({"_id" : match.user}, function(err1, user){
				if (err1) {
					res.send(err1);
				} else {
					
					res.send({match: match, user: user.username});
				}
			})
  			
  		}
	}) 
});
// app.get('/getComment', function(req, res){
// 	Comment.find({"_id" : id.toObjectId() },
// 		function(err, comment){
// 			if (err){
// 				res.send(err);
// 			} else {
// 				User.findOne({"_id": comment.user},
// 					function (err1, user){
// 						res.send(err1);
// 					}else{
// 						res.send({user: user.username});
// 					})
// 			}
// 		})
// })
app.use('/match', apiRoutes);
app.post('/match', function(req, res){
	req.body.user = req.decoded;
	var newMatch = new Match(req.body);
	console.log(newMatch);
	newMatch.save( function(err, result) {
      if (err) {return res.status(500).send(err);}
      res.send(result);
  	});
});
app.get('/users', function(req, res) {
  	User.find({}, function(err, users) {
    	res.json(users);
  	});
});
app.use('/comment', apiRoutes);
app.post('/comment', function (req, res){
	req.body.user = req.decoded;
	var newComment = new Comment(req.body);
	console.log(newComment);
	newComment.save(function(err, result){
		if (err) {return res.status(500).send(err);}
		res.send(result);
	})
})   


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