/** @jsx React.DOM */
var React =require('react');

var AppTemplate=require('./app-template.js')
var AppShopList = require('./shop/app-ShopList.js');
var AppCarList = require('./car/app-CarList.js');
var AppNotFound = require('./app-NotFound.js');
var AppCatalogdetail=require('./product/app-catalogdetail')

/*路由*/
var Router = require('react-router-component')
/*當找不到位置時(必須)*/
var NotFound = Router.NotFound

/*路由的容器*/
var Locations = Router.Locations

/*路由的項目*/
var Location =Router.Location


/*
	demo 說明
	這是個購物車範例 有商品列表(shop List)及購物車(CarList)
	
	功能:  
		增加項目到購物車(CarList) 的按鈕
		購物車(CarList) 增減數量,刪除項目,小計,總額
*/
var App=React.createClass({
  	
	render:function(){
		return (<AppTemplate>
						<Locations> 
								<Location path='/' handler={AppShopList}  />
								<Location path='/AppCarList' handler={AppCarList}   />
								<Location path='/item/:item' handler={AppCatalogdetail}   />
								<NotFound handler={AppNotFound} />
						</Locations>
				</AppTemplate>); 
	}
   
});

module.exports=App;

