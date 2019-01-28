//js

/*箭头函数 :去掉function关键字
           如果{} 就必须写return 
           如果就一个参数 省略()
           (){} 之间用=>

 闭包 ：不销毁的函数作用域

 forEach：不用写return 

----------------------*/

//  function fun(b){
// 	return function(c){return b+c;}//匿名函数
// }


fun = b => c => b+c; //有俩箭头（及以上）的函数 ：高阶函数
console.log(fun(1)(2));//3

//console.log(fun(1));

//[1,2,3].forEach(function(value){console.log(value)});

[1,2,3].forEach( value => console.log(value)); 
//[1,2,3].forEach( value => {return console.log(value);}); //不用return 
