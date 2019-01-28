//js
/*ES6:
   includes  返回布尔值 用处单一 

   find      返回找到的那一项
             不改变原数组
             回调函数中返回true表示找到了，找到后停止循环（自带循环功能）

 ES5: 
 （some every 也是自带循环功能）
   some 找true 找到后停止 返回true   
        找不到-->false（自带循环功能）

   every 找false 找到后停止 返回false 




reduce 收敛  返回叠加后的效果



------------------*/

var arr = [1,2,3,4,55,555];
console.log(arr.includes(5)); //false
//find 换成some --> ture 
//find 换成every --> false
var result = arr.find(function(val){
	return val.toString().indexOf(9)>-1;
});
console.log(result);//55 找到后就不再找了  没找到返回undefined



//reduce
var arr1 = [1,2,3,4,5];
var result = arr1.reduce(function(a,b){
  console.log(a,b);//查看实参
  return a+b;
});

document.write(result);



//reduce 练习 :求和

var arrPrice = [
    {price:30,count:2},
    {price:30,count:3},
    {price:30,count:4}

];

let sum = arrPrice.reduce(function(prev,next){
	console.log(prev,next);
     return prev+next.price*next.count;
},0);//第二个参数0 默认指定第一个prev
console.log(sum);


//reduce练习2：
var arr2 = [
  [1,2,3,],
  [4,5,6],
  [7,8,9]
];

var result1=arr2.reduce(function(prev,next){
   return prev.concat(next);
});
console.log(result1);