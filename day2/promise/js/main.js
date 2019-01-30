//js

/*promise解决回调问题：
           promise三个状态：1.成功态 （成功失败是自己定义的）
                           2.失败态
                           3.等待状态
           Promise是规定好，自带的类
           我们没有传回调函数，但是自动把值传到回调函数中了

node 框架 大部分是异步-->解决异步-->用回调


        回调函数：将后续的处理逻辑传入到当前要做的事情里，这事做好后调用次函数
                 (给什么方法充当参数的函数)
                 回调函数的this都是window 为了在摆脱这个 写成箭头函数格式
                 （箭头函数没有this和arguments，它自己没有this就会找上一级）



--------------*/



//典型的回调函数：
let a;
function buy(callback){ //定义callback：是cook这个函数
	setTimeout(()=>{
		 a = 'ling';
		 callback(a); //调用cook函数，传实参
	},2000);
}

//调用buy来执行cook
buy(function cook (val){//定义一个形参val 去get上面给的实参
	console.log(val);
});



/*用promise来简化上面代码-------------------------------------------*/
console.log(Promise);
/*
resolve 代表转向成功态
reject 代表转向失败态
resolve,reject 都是函数
promise的实例就一个then方法 then方法中有两个参数
*/


let p = new Promise((resolve,reject)=>{

	console.log(1);
	setTimeout(()=>{
		let b = 'the promise data';

		 //想成功还是失败 自己选
		 resolve(b); //成功
		 //reject(b);//失败
	},2000);
});

console.log(2);
//then方法的两个参数：第一个函数是resolve，第一个函数是reject
//p.then((data)=>{alert("i did it!!");},(data)=>{alert("error...");});
p.then((data)=>{alert(data);},(data)=>{alert("error...");});



// function buyBag (){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(function(){
// 			  let c= "mai";
//               resolve(c);
// 		},2000);
// 	});
// }


// buyBag().then(
//          (data)=>{console.log(data)},
//          (data)=>{console.log("error0-0");}

// 	);


//增加Math.random();功能
function buyBag (){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			if(Math.random()>0.1){resolve("yes");}else{reject("no");}
			 
              
		},Math.random()*2000);
	});
}


buyBag().then(
         (data)=>{console.log(data);},
         (data)=>{console.log(data);}

	);