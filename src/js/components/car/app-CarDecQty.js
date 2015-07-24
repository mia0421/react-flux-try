var React = require('react');

var appAction=require('../../actions/app-actions.js');

/*購物車 減少某商品數量*/
var appCarDexQty = React.createClass({
	DecQty:function(){

		/*呼叫action 的decreaseItem方法*/
		appAction.decreaseItem(this.props.Index);

	},
	render: function() {
		return (
			<button onClick={this.DecQty}>-</button>
		);
	}

});



module.exports = appCarDexQty