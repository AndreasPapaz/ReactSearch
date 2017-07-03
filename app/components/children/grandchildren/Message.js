var React = require('react');

var Message = React.createClass({
	render: function() {
		return(
			<div className="result-div panel panel-default">
				<div class="panel-body">
					<h5 className="black-text">{this.props.message}</h5>
				</div>
			</div>
		)
	}
});

module.exports = Message;