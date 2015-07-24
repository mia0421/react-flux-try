/*安裝flux npm install flux 取得裡面原有的Dispatcher來擴展*/
var dis=require('flux').Dispatcher;

/*安裝merge npm install merge*/
var merge=require('merge');


/*這一個廣播器  用merge擴展原本Dispatecher 的功能*/
var AppDispatcher=merge(new dis(),{

	/*擴展一個viewAction 的廣播*/
	viewAction:function(action) {
		
		/*這裡的this就是AppDispatcher但已經繼承了Dispatcher的方法*/
		this.dispatch({
			source:'VIEW_ACTION',
			action:action

		});
		
	}
})


module.exports=AppDispatcher;

