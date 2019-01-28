//js

let arr = [1,2,3,4,5];

arr.b = 100;
/*方式一：编程式 自己手动写--------------------------*/
for(let i = 0;i<arr.length;i++){
	console.log(arr[i]);
}



/*方式二：声明式（browser 帮你实现 不用知道内部原理）-------------------*/
//注意；forEach 不支持 return 
arr.forEach(function(value,index){
	console.log(value);//回调函数的两个参数 第一个是value/item
	                  //第二个是 索引 （不常用）
	                  //第三个是 数组（不常用）
});



/*方式三：

 for in : 循环的是序号 包括数组里私有属性 有b

 for of :循环的是值 支持return 不能遍历对象 无b

 -------------------*/


for(let key in arr){
	document.write(typeof key);//string
	document.write(key);//0 1 2 3 4 index
	document.write("<br>");
}

for(let key of arr){
	document.write(typeof key);//number
	document.write(key);//1 2 3 4 5 value
}
 




//遍历元素 先把元素的属性名取出来做一个数组： Object.keys();
let obj = {school:"zf", age:8};
for(let a of Object.keys(obj)){
	console.log(a);//属性名（keys)
	console.log(obj[a]);//属性值(value)
}