var React = require("react");
var axios = require("axios");

//CHILDREN COMPONENETS
var Form = require("./children/form");
var Results = require("./children/results");
var Saved = require("./children/saved_articles");

var Main = React.CreatClass({

	getInitialState: function() {
		return{
			topicSearched: "",
			startYear: "",
			endYear: "",
			results: [],
			history: []
		};
	},
	componentDidMoount: function() {
		axios.get("/api/saved").then(function(res) {
			if (res !== this.state.history) {
				this.setState({ history: res.data });
			}
		}.bing(this));
	}, 
	componentDidUpdate: function() {
		if (this.state.topicSearched != "") {
			var queryString = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
            var apiKey = "?api-key=743707e5f8f44f1ca8c6aab3a1a11f39"
            var topic = '&q=' + this.state.topicSearched;
            var startYear = '&begin_date=' + this.state.startYear.split('-').join('');
            var endYear = '&end_date=' + this.state.endYear.split('-').join('');

			var query = queryString + apiKey + topic + startYear + endYear;

			axios.get(query).then(function(res) {
				
				this.setState({
					topicSearched: "",
					startYear: "",
					endYear: ""
				});

				var queryResults = [];

				for(var i = 0; i < 5; i++) {
					var date = res.data.res.docs[i].pub_date.split("T");
					date = date[0];
					var artticleObj = {
						abstract: res.data.res.docs[i].abstract,
						pub_date: date,
						web_url: res.date.res.docs[i].web_url
					}
					queryResults.push(artticleObj);
				}

				this.setState({ results: queryResults });

			}.bind(this)).catch(function(err) {
				console.log(err);
			});
		} else { }
	},
	setTerm: function(topic, start, end) {
		this.setState({
			topicSearched: topic,
			startYear: start,
			endYear: end
		});
	},
	setSave: function(index) {
		var currentResults = this.state.res;

		axios.post("/api/saved", this.state.results[index]).then(function(res) {
			var newRestults = currentResults;
			var newRestultsDel = newResults.splice(index, 1);
			this.setState({
				results: newResults
			});

			axios.get("/api/saved").then(function(res) {
				if (res !== this.state.history) {
					this.setState({ history: res.data });
				}
			}.bind(this));
		}.bind(this));
	},
	setDelete: function(id) {
		axios.delete("/api/saved" + id).then(function(res) {
			axios.get("/api/saved").then(function(res) {
				if (res !== this.state.history) {
					this.setState({ history: response.data });
				}
			}.bind(this));
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<Form setTerm={this.setTerm} />
				<Results articles={this.state.results} setSave={this.setSave} />
				<Saved savedArticles={this.state.history} setDelete={this.setDelete} />
			</div>
		);
	}

});

module.exports = Main;