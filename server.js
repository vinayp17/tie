require('rootpath')();
var express = require('express');
var http = require('http');

//initialize the express js object
var app = express();

// define settings
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname))

app.get('/', function(req, res) {
	res.render('home');
});

var server = app.listen(3000, function() {
	console.log("Server listening at http://"+ server.address() + ':' + server.address().port);
	
})
