var React = require('react');

var Panel = React.createClass({
	render: function() {
		return(
			<a className="selection-panel col-sm-6 col-xs-12 btn btn-info" href={this.props.url}>
				<h2>{this.props.title}</h2>
				<h4>click here</h4>
			</a>
		)
	}
});

module.exports = Panel;