//js

/*小练习

data 放数据
methods 放函数

*/

let vm = new Vue({

   el:'#app',
   data:{
   	  value:'',
   	  arr:[]

   },
   methods:{
   	  // add(e){if(e.keyCode===13){this.arr.unshift(this.value);}},
   	   add(e){this.arr.unshift(this.value);this.value = "";//输入框自动清零
   	         },

      //声明一个变量 定义一个形参 val  i
      romove(i){this.arr= this.arr.filter((item,index)=> index !== i);}
      //filter item 箭头后要删除的是：想留下的东西的反义 
                         //要筛选出来的： 留下的东西
                         //换成比较index 一样val的不会全删


            }
});