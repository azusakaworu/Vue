//js

/*vue 简介
 
 el: element 
     使Vue作用于什么范围内 
     告诉Vue能管哪一部分，querySelector(css选择器)

data对象 
    里面的数据会被vm所代理:  vm.msg（vm代替data取msg)
   

*/

let vm = new Vue({
   el:'#app',
   data:{

   	   msg:"hello，ling"//可以通过vm.msg取得对应内容

   }


   

});