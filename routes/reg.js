var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'7y4x8a9lb'
});

connection.connect(function(err){
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

var name_result;






/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('reg', { title: 'sign up' });
});

router.get('/repeat', function(req, res, next) {
	var un = req.query.name;


});

connection.end();


module.exports = router;
