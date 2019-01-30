//js

/*Ajax 四部曲：(超恶心 了解而已)
         1. let xhr = new XMLHttpRequest();
         2. xhr.open(type,url,true);
         3. xhr.responseType = dataType;
         4. xhr.onload = function(){};

XMLHttpRequest 很粗糙的API 过时了
用fetch (完全基于promise)

--------------*/

/*jQuery 用法：
$.ajax({
	url:"",
	data:{},
	type:"get",
	dataType:'json',
	success/error

});
*/


/*promise 写法
ajax({}).then(
       
       ()=>{},
       ()=>{}
     );
*/




function ajax({url='xxx',type='data',dataType='json'}){
   return new Promise((resolve,reject)=>{
       let xhr = new XMLHttpRequest();
       xhr.open(type,url,true);//是否异步-->true
       xhr.responseType = dataType;
      
       xhr.onload = function(){
       	if(xhr.status ===200){
       		 resolve(xhr.response)
       		}else{reject("not found")}
       	   };//成功调用成功的方法
       	
       xhr.onerror = function(err){reject(err)};//失败调用失败的方法

       xhr.send();


   });

  
}
//调ajax函数，实参是一个对象
ajax({url:'./carts.json'}).then(
	(res)=>{console.log(res);},
	(err)=>{console.log(err);}
	);