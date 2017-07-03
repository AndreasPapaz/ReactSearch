var React = require('react');
var Header = require('./Header');

var Main = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<div className="main-content">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;