

react-flux-try
=============
#專案架構
![Alt text](/img/ScreenClip.png)

#定義可能發生的事件列舉
![Alt text](/img/ScreenClip2.png)

#定義Dispatcher 廣播器
這邊先安裝2個插件 
```
npm install
```
>flux  => 取得flux內建的Disparcher來擴展
>merge => 用來擴展內建Disparcher的功能 (直接擴展也可以...但是這樣寫比較清楚)

接下來宣告一個物件AppDispatcher 為擴展完畢之後的內容
在擴展的viewAction中呼叫廣播器做廣播 傳入
```
{
     source: 廣播的狀態
     action : action給的參數
}
```
![Alt text](/img/ScreenClip3.png)

#編輯Action
定義view會需要更動Store的Action
![Alt text](/img/ScreenClip4.png)

#定義Store
Store 顧名思義式儲存資料與方法的地方
當View發生變動改變了Store的資料
Store需負責發出change事件通知View取得最新的的資料並重繪(單向循環)

不過當View需要取的資料時會直接呼叫Store的方法來取得資料
所以當資料改變須透過View -> Action -> Dispatcher -> Store ->View
取的資料則是 View -> Store -> View
![Alt text](/img/ScreenClip5.png)
![Alt text](/img/ScreenClip6.png)

#Component (View)
取得資料
![Alt text](/img/ScreenClip7.png)
改變資料( Ex: 增刪修 )
![Alt text](/img/ScreenClip8.png)
