// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// // ES6 set up
// mongoose.Promise = Promise;

// var app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// var PORT = process.env.PORT || 3000;

// //body parser set up
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // ROUTES
// var routes = require('./controllers/controller');
// app.use('/', routes);

// // USE LOCALHOST OR ENV
// // var connectionString;
// // if(process.env.PORT) {
// // 	connectionString = 'mongodb://heroku_vzp76p0g:dcjn3749ehveosgf312p30s2vp@ds145952.mlab.com:45952/heroku_vzp76p0g';
// // } else {
// // 	connectionString = 'mongodb://localhost/nytreact';
// // }
// mongoose.connect('mongodb://heroku_vzp76p0g:dcjn3749ehveosgf312p30s2vp@ds145952.mlab.com:45952/heroku_vzp76p0g');

// app.listen(PORT, function() {
// 	console.log('LISTENING ON PORT : ' + PORT);
// });

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;


//Set mongoose to leverare buitl in JS ES6 promises
mongoose.Promise = Promise;

//INIT express
var app = express();

// use morgan and body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static(__dirname + '/public/assets'));

//Make public a static dir
app.use(express.static("public"));


// DB config with mongoose
mongoose.connect("mongodb://heroku_vzp76p0g:dcjn3749ehveosgf312p30s2vp@ds145952.mlab.com:45952/heroku_vzp76p0g");
// mongoose.connect("mongodb://localhost/newscrapper");
// var db = mongoose.connection;

//show any mongoose err
// db.on("error", function(error) {
// 	console.log("MONGOOSE ERROR: ", error);
// });

//Once logged into the db through mongoose, message longon succuess
// db.once("open", function() {
// 	console.log("MONGOOSE CONNECTION SUCCESSFUL!");
// });


// // ROUTES
var routes = require('./controllers/controller');
app.use('/', routes);

//LISTEN ON PORT
app.listen(PORT, function() {
	console.log("App running on port " + PORT);
});