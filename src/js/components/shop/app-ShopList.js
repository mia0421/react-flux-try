var React=require('react')
var appStore=require('../../stores/app-store.js');
var AppAddItem=require('./app-addItem.js');
var AppShopItem=require('./app-ShopItem.js');
var appMixins=require('../Mixins/app-Mixins.js');

var getCartList=function() {
	return {
			item: appStore.getShopList()
		}
}

/*清單列表*/
var AppShopList=React.createClass({
	mixins:[appMixins(getCartList)],
	componentWillMount: function() {
			console.log("stare 清單列表")
	},
	render: function() {
		
		return (<div>
					
					<h5>項目清單</h5>
						<div className='row'>
							
							{
							
								this.state.item.map(function(item,i){
									return <AppShopItem item={item}  />
												
										
								})

							}
						
						</div>
				</div>);
	}

});

module.exports = AppShopList;