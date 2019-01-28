//js
/*data里面可以放字符串，但多是数组，对象 甚至是函数
      一定要先取的名字初始化 值可以先空着 ""

变异数组：(会改变原值)
         pop push shift unshift sort reverse splice 

不改变原值的数组： 前面在定义个变量 vm.arr =。。。。
         map filter join ...

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
// vm.arr.reverse();
// vm.arr = vm.arr.map(item =>item*=2);
// vm.arr =vm.arr.join("a");
vm.arr=vm.arr.filter(item =>item===4);
