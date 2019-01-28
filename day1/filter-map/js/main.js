//js

/*filter 过滤（删除，筛选）
         不改变原数组 
         返回结果：过滤后的新数组
         回调函数的返回结果：如果返回true 表示这一项放到新数组中
 
 map 映射（更新）
     不改变原数组 
     返回结果：过滤后的新数组
     回调函数的返回结果：回调函数中返回什么这一项就是什么

 */
let arr = [1,2,3,4,5,6];
let newArr = arr.filter(function(value,index){
	return value>2 && value<5;}
	);
console.log(newArr);//[3,4]



let arr1 = [6,7,8,9];
let newArr1 = arr1.map(function(item){
     //return 2; //全变成2了
     //return item*=2; //item = item*2
     return "<li>"+item+"</li>";
     //return `<li>${item}</li>`;


});
console.log(newArr1.join(""));//join(); 把数组转成字符串
                              //放一个空串 去逗号
