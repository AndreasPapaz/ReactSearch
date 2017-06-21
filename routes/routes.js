var express = require("express");
var router = express.Router();
var Article = ("./../models/Article.js");

// ++++++++++ +++ +++++++++++//
router.get("/api/saved", function(req,res) {
	Article.find({}, function(err, aricles) {
		if (err) {
			console.log(err);
		} else {
			res.json(aricles)
		}
	});
});