var express = require('express');
var fs = require('fs');
var router = express.Router();


console.log('1====' + Date.now());
fs.mkdir('t1', function(err){
  if(err){
    console.log(err);
  }else{
    console.log('t1=====' + Date.now());
  }
});

console.log('2=====' + Date.now());

fs.mkdirSync('t2');
console.log('t2=====' + Date.now());


fs.rmdir('t1',function(){
  console.log('t1.1=====' + Date.now());
});

fs.rmdirSync('t2');
console.log('t2.2======' + Date.now());


if(fs.existsSync('t3')){
	var files = fs.readdirSync('t3');
	for(var i = 0 ; i < files.length ; i++){
		fs.rmdirSync('t3/'+files[i]);
	}
	fs.rmdirSync('t3');
}


fs.mkdir('t3', function(err){
  if(err){
    console.log(err);
  }else{
  	fs.mkdirSync('t3/t3-1');
  	fs.mkdirSync('t3/t3-2');
    
    fs.readdir('t3',function(err,files){
    	console.log(files);
    });
  }
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cappuccino', welcome: 'welcome to my website~~'});
});

module.exports = router;
