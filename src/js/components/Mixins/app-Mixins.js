/** @jsx React.DOM */
var React = require('react');
var appStore=require('../../stores/app-store.js');

var appMixins=function(callbackFun) {
	return {
			/*列表Star 只執行一次  */
			componentWillMount: function() {

				/*[重要]
					component起始時須到store註冊幫變換時通知我重繪
					並回傳一個callback 執行某一項任務
				*/
				appStore.addChangeListener(this._onStoreChange); 
			},
			componentWillUnmount: function() {
				
				appStore.removeChangeListener(this._onStoreChange);
			},
			_onStoreChange: function() {

				/*重繪的callback方法 重新取得state資料*/
				this.setState(callbackFun(this));
			},
			/*預設值 */
			getInitialState: function() {
				return callbackFun(this);
			}
	}
}

module.exports=appMixins;