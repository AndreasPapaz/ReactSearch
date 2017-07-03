var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// ES6 set up
mongoose.Promise = Promise;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var PORT = process.env.PORT || 3000;

//body parser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
var routes = require('./controllers/controller');
app.use('/', routes);

// USE LOCALHOST OR ENV
// var connectionString;
// if(process.env.PORT) {
// 	connectionString = 'mongodb://heroku_vzp76p0g:dcjn3749ehveosgf312p30s2vp@ds145952.mlab.com:45952/heroku_vzp76p0g';
// } else {
// 	connectionString = 'mongodb://localhost/nytreact';
// }
mongoose.connect('mongodb://heroku_vzp76p0g:dcjn3749ehveosgf312p30s2vp@ds145952.mlab.com:45952/heroku_vzp76p0g');

app.listen(PORT, function() {
	console.log('LISTENING ON PORT : ' + PORT);
});
