var React = require('react');
var Link=require('react-router-component').Link;

var AppCartsummary = React.createClass({

	render: function() {
		return (
				
					<Link href="/AppCarList" className="btn btn-success"> Cart Items: QTY / $COST</Link>
				
		);
	}

});

module.exports = AppCartsummary;