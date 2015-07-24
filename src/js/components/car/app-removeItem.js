var React = require('react');

var appAction=require('../../actions/app-actions.js');

/*購物車 刪除項目*/
var appRemoveItem = React.createClass({
	removeItem:function(){
			/*呼叫action 的removeItem方法*/
			console.log("in 刪除元件",this.props.Index)
		appAction.removeItem(this.props.Index)

	},
	render: function() {
		return (
			<button onClick={this.removeItem}>X</button>
		);
	}
 
});

module.exports = appRemoveItem;