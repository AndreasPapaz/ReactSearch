var React = require('react');
var Result = require('./grandchildren/greatgrandchildren/Result');
var Message = require('./grandchildren/Message');

var helpers = require('../utils/helpers');

var Saved = React.createClass({
	getInitialState: function() {
		return {
			saved: [],
			message: ''
		};
	},
	componentDidMount: function() {
		helpers.getSaved().then(function(res) {
			if (res.data.length > 0) {
				this.setState({ saved: res.data });
			} 
			else {
				this.setState({ message: 'No Items Saved Yet'});
			}
		}.bind(this));
	},
	render: function() {
		return(
			<div className="result-holder">
				<h3>Saved</h3>
				{this.state.saved.map(function(article, i) {
					return (
						<Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={true} />
					);
				})}
				{this.state.message.length > 0 && <Message message={this.state.message} />}
			</div>
		)
	}
});

module.exports = Saved;