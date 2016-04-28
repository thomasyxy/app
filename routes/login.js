var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'7y4x8a9lb'
// });

// connection.connect(function(err){
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}

// 	console.log('connected as id ' + connection.threadId);
// });

// connection.end();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var result = validate(username,password);

  if (result) {
  	res.send(req.body.se);
  }else{
  	res.send('Error');
  }
});


function validate(username,password){
	if(username === 'thomasyxy' && password === '7y4x8a9lb'){
		return true;
	}else{
		return false;
	}
}

module.exports = router;
