//js
/*data里面可以放字符串，但多是数组，对象 甚至是函数
      一定要先取的名字初始化 值可以先空着 ""


*/

let vm = new Vue({
  
   el:'#app',
   data:{
   	obj:{school:"bilibili魔法学院",age:8,years:""},
   	arr:[1,2,3,4,5]



   	}



});

// vm.arr[0]=100; //改变数组中的某一项 Vue是监控不到的 
// vm.arr.length -= 2;//也不能改变length