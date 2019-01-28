//js
/*vue 绑定事件

函数都放在methods 里面

methods和data中的数据会全部放到vm上， 所以名字不能冲突（不能一样） -->会报错

methods中的this指向的也都是实例 vm //根实例
箭头函数 没this 不能在Vue里面用

---------*/

let vm = new Vue({//根实例
   
   el:'#app',
   data:{
        
        msg:"hi dangdangd",


   },

   methods:{

       // fun:function(){alert("hahahaha");}
       fun(){alert(this.msg);},//:function 可省略 ES6
       //fun(e){alert(this.msg);},

       fun1(event,a){console.log(a);},
       fun2(a){console.log(a);},
       fun3(event){console.log(event);}//呼叫万事通

   }



});