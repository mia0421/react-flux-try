var React = require('react');
var AppHeader=require('./header/app-header.js')

var AppTemplate = React.createClass({

	render: function() {
		return (
			<div className="container">
	            <AppHeader />
	            {this.props.children}
          	</div>
		)
	}

});

module.exports = AppTemplate;