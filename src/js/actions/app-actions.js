
var appConstants=require('../constants/app-constants.js');
var appDispatcher=require('../dispatchers/app-dis.js');

/*Action 
	當View發生變動先通知action  
	action在通知Dipatcher(廣播)
	並傳入為何種Aaction及參數
*/
var appActions={
	addItem:function(Item){

		/*appDispatcher 為廣播器 定義在app-dis.js*/
		appDispatcher.viewAction({

			/*appConstants 為常數定義在app-constants.js 應來傳遞現在action的狀態(自定義及可)*/
			actionType:appConstants.ADD_ITEM,

			/*需要動作的參數*/
			item:Item

		})

	},
	removeItem:function(index){
		
		appDispatcher.viewAction({
			actionType:appConstants.REMOVE_ITEM,
			index:index
		})

	},
	decreaseItem:function(index){

		appDispatcher.viewAction({
			actionType:appConstants.DECREASE_ITEM,
			index:index
		})
	
	},
	increaseItem:function(index){

		appDispatcher.viewAction({ 
				actionType:appConstants.INCREASE_ITEM,
				index:index
		})
	}

}

module.exports=appActions;
