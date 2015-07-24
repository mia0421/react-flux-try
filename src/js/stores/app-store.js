var appDispatcher=require('../dispatchers/app-dis.js');
var appConstants=require('../constants/app-constants.js');
var eventEmoitter=require('events').EventEmitter;
var merge=require('merge');


/*這是一個資料儲存器 Store*/


/*==========變數區============*/
var CHANGE_EVENT = "change";


var _shopList = [];

  for(var i=1;i<=10;i++){
	_shopList.push({
    'id': 'Item' +i,
    'title':'品項 #' + i,
    'summary': 'This is an awesome widget!',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
    'img': '../../src/assets/product.png',
    'cost': i
  });
  }

var _cartItems = [];
/*==========方法============*/

/*刪除項目*/
function _removeItem(index){
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
  console.log(_cartItems)
}

/*已存在 增加數量*/
function _increaseItem(index){
	_cartItems[index].qty++;
}

/*減少數量*/
function _decreaseItem(index){
  if(_cartItems[index].qty>1){
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}
/*增加項目*/
function _addItem(item){

  if(!item.inCart){
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
}

/*==========監聽事件做相關處理============
繼承EventEmitter (這是一個事件處理工具)透過on綁定事件,emit觸發
*/
var appStore=merge(new eventEmoitter(),{
		/*啟動 chage事件*/
		emitChange:function(){
	    	this.emit(CHANGE_EVENT)
	  	},
	  	/*註冊 chage事件*/
	  	addChangeListener:function(callback){
	    	this.on(CHANGE_EVENT, callback)
	  	},
	  	/*取消註冊 chage事件*/
		removeChangeListener:function(callback){
		    this.removeListener(CHANGE_EVENT, callback)
		},
		getCart:function(){
		    return _cartItems
		},
		getShopList:function(){
		    return _shopList
		},

		/*
 			* 向 Dispatcher 註冊自已，才能偵聽到系統發出的事件
 			* 並且取回 dispatchToken 供日後 async 操作用
 		*/
		dispatcherIndex:appDispatcher.register(function(payload){

		/*payload <==透過dispatcher傳入的參數
				source:'VIEW_ACTION' 
				action:action <==這是action傳入的參數
		*/
			var actionData=payload.action;

			/*判斷要做啥事*/
			switch(actionData.actionType){
				case appConstants.ADD_ITEM:

					_addItem(actionData.item);

					break;
				case appConstants.REMOVE_ITEM:
					
					_removeItem(actionData.index);

					break;
				case appConstants.INCREASE_ITEM:
				
					_increaseItem(actionData.index);
				
					break;
				case appConstants.DECREASE_ITEM:

					_decreaseItem(actionData.index);

					break;

			}
			/*觸發事件通知ReactView 要做chang重繪*/
			 appStore.emitChange();
			 return true;
		})
});


module.exports=appStore;

