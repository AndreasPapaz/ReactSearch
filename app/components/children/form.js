var React = require("react");

var Form = React.createClass({
	getInitialState: function() {
		return {
			topicSearched: "",
			startYear: "",
			endYear: ""
		};
	},
	handleTopicChange: function(event) {
		this.setState({
			topicSearched: event.target.value,
		});
	},
	handleStartChange: function(event) {
		this.setState({
			startYear: event.target.value,
		});
	},
	
})