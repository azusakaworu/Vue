//js

/*
VueTools与axios的简单使用

created:function(){}   
        简写：created(){} 
        钩子函数，数据初始化后就调用
        专门用来发送Ajax的方法
        this指向也是vm，可以调用methods里的函数 this.XXXX()


axios这个变量可以直接用：
   then里有两个参数，分别是两个函数：
           第一个：Ajax成功的回调
           第二个：不成功的


           this.products=res.data;  把data的数据装在products里面

*/

let vm = new Vue({

	el:'#app',
	data:{

		products:[]
          },

    created:function(){

    	axios.get("./carts.json").then(
               res=>{this.products=res.data;},
              err=>{console.log(err);}


    		);

    },
    methods:{}
});