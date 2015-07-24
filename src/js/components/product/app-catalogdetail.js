var React = require('react');
var appMixins=require('../Mixins/app-Mixins.js');
var appStore=require('../../stores/app-store.js');
var Link=require('react-router-component').Link;

var searchItem= function (component) {
	var searchItem;
	appStore.getShopList().map(function(item){

		if(item.id==component.props.item){
			searchItem=item;
		}

	});

	return {item:searchItem};
}

var AppCatalogdetail = React.createClass({
	mixins:[appMixins(searchItem)],
	render: function() {
		return (
		
			
			    <div className="thumbnail">		
			    
			      <img src={this.state.item.img} alt="..." />
			      <div className="caption">
			        <h3>{this.state.item.title}</h3>
			        <p>{this.state.item.description}</p>
			        <p>
			        $${this.state.item.cost}
			        <span className="text-success" >
			        	{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}
			        </span>
			        </p>

			        <p>
			        	<Link href={'/'} className="btn btn-primary" role="button">
			        		返回列表
			        	</Link> 
			        	
			        </p>
			      </div>
			    </div>
			
		
		);
	}

});

module.exports = AppCatalogdetail;