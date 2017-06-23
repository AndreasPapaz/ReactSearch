var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;


// ++++++++++  MONGO DB SET UP +++++++++++//
mongoose.connect("mongodb://localhost/ReactSearch");

var db = mongoose.connection;

db.on("error", function(error) {
	console.log("mongose err ", error)
});
db.once("open", function() {
	console.log("mongoose connection successful");
});

// ++++++++++  Middleware +++++++++++//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json "}));
app.use(express.static(__dirname + '/public'));

// ++++++++++  Routes +++++++++++//
var routes = require("./routes/routes.js");
app.use("/", routes);

// ++++++++++  Server Start +++++++++++//
app.listen(PORT, function() {
	console.log("YOU ARE ON PORT " + PORT);
});