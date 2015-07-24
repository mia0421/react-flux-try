
var appAction=require('../../actions/app-actions.js');
var React = require('react');


/*商品列表 增加項目到購物車*/
var appAddItem = React.createClass({
	addItem:function(){

		/*呼叫action 的addItem方法*/
		appAction.addItem(this.props.Item);

	},
	render: function() {
		return (
			<span onClick={this.addItem}>加入購物車</span>
		);
	}

});

module.exports = appAddItem;