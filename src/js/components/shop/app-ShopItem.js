var React = require('react');
var AppAddItem=require('./app-addItem.js');
var Link=require('react-router-component').Link;

var AppShopItem = React.createClass({
	
	render: function() {
		return (
		
			 <div className="col-sm-3"  >
			    <div className="thumbnail">			    
			      <img src={this.props.item.img} alt="..." />
			      <div className="caption">
			        <h3>{this.props.item.title}</h3>
			        <p>{this.props.item.description}</p>
			        <p>
			        $${this.props.item.cost}
			        <span className="text-success" >
			        	{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}
			        </span>
			        </p>

			        <p>
			        	<Link href={'/item/'+this.props.item.id} className="btn btn-primary" role="button">
			        		詳細資料
			        	</Link> 
			        	<a  className="btn btn-default" role="button">
			        		<AppAddItem Item={this.props.item} />
			        	</a>
			        </p>
			      </div>
			    </div>
			 </div>
		)
	}

});

module.exports = AppShopItem;