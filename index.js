var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));


var foundMap = '';
var theMethod ='';

var firstD = '';
var secondD = '';

app.get('/', function(req, res){
	res.render('maps.ejs');
});

app.get('/searchmap', function(req, res){
	res.render('searchMap.ejs', {
		foundMap: foundMap,
		firstD: firstD,
		secondD: secondD
	});
});


app.get('/searchmapdirection', function(req, res){
	res.render('searchmapDirection.ejs', {
		firstD: firstD,
		secondD: secondD,
		theMethod: theMethod
	});
});


app.post('/searchmap', function(req, res){
	foundMap = req.body.searchmap;
	res.redirect('/searchmap')
});


app.post('/searchmapdirection', function(req, res){
	firstD = req.body.searchmapfrom;
	secondD = req.body.searchmapto;
	theMethod = req.body.themethod;
	res.redirect('/searchmapdirection')
});


app.listen('3000', function(req, res){
	console.log("Server started");
});