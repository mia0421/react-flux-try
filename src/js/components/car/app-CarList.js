var React = require('react');
var Link=require('react-router-component').Link;

var appStore=require('../../stores/app-store.js');

var AppDecQty = require('./app-CarDecQty.js');
var AppIceQty = require('./app-CarIceQty.js');
var AppRemoveItem = require('./app-removeItem.js');

var appMixins=require('../Mixins/app-Mixins.js');


var getCartList=function(aaa){
	
	return {item:appStore.getCart()}
}

/*購物車列表*/
var appCarList = React.createClass({
			componentWillMount: function() {
				console.log("stare 購物車")
				
			},
			mixins:[appMixins(getCartList)],
			render: function() {
				
				var total = 0;
				return (<div>
							<h5>購物車</h5> 
							<table className='table'>
										<thead>
											<tr>
												<th></th> 
												<th>Title</th>
												<th>Qty </th>
												<th></th> 
												<th>Cost</th> 
											  </tr> 
										  </thead> 

										  <tbody> 
										  			{
														this.state.item.map(function(item, i) {

															total+= item.qty*item.cost;

															return ( <tr key={'AppQty'+i}>
																		<td> 
																			<AppRemoveItem  Index={i} />
																		</td>
																		<td> {item.title} </td> 
																		<td> {item.qty} </td> 
																		<td>
																			<AppIceQty  Index={i} />
																			<AppDecQty  Index={i} />  
																		</td>
																		<td> ${item.qty*item.cost} </td> 
																	</tr>)
														})

													}
													<tr>
													<td colSpan="4" > 總計 </td>
													<td> ${total} </td> 
												</tr> 
											</tbody>
											
											
									 </table> 

									 <Link href='/'>回購物清單</Link>
						</div>);
					}

				});

module.exports = appCarList;