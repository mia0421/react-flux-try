var React = require('react');

var appAction=require('../../actions/app-actions.js');

/*購物車 增加某商品數量*/
var appCarIceQty = React.createClass({

	iceQty:function(){
		
		/*呼叫action 的increaseItem方法*/
		appAction.increaseItem(this.props.Index);

	},
	render: function() {
		return (
			<button onClick={this.iceQty}>+</button>
		);
	}

});



module.exports = appCarIceQty