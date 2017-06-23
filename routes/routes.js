var express = require("express");
var router = express.Router();
var Article = ("./../models/Article.js");

// ++++++++++ +++ +++++++++++//
router.get("/api/saved", function(req,res) {
	Article.find({}, function(err, aricle) {
		if (err) {
			console.log(err);
		} else {
			res.json(aricle);
		}
	});
});

router.post("/api/saved", function(req, res) {
	var newArticle = new Article({
		title: req.body.abstract,
		date: req.body.pub_date,
		url: req.body.web_url
	});

	newArticle.save(function(err, article) {
		if(err) {
			console.log(err);
		} else {
			res.json('pass');
		}
	});
});

router.delete("/api/saved/:id", function(req, res) {
	Article.findByIdAndRemove(req.params.id, function(err, article) {
		if (err){
			console.log(err)
		} else {
			res.json("pass");
		}
	});
});

router.get("*", function(req, res) {
	var dir = __dirname;
	var dirSplit = dir.split("routes");
	dir = dirSplit[0];

	res.sendFile(dir + '/public/index.html');
});

module.exports = router;