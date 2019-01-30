//js

/*
购物车小练习（1）

*/

let vm = new Vue({

	el:'#app',
	data:{

		products:[]
          },

    created:function(){

      this.getData();//调用函数 this是vm

    },
    methods:{
      getData:function(){//把这一套code封装到一个函数里
          axios.get("./carts.json").then(
               res=>{console.log(res);//res是自带的对象 定义形参给实参
                this.products=res.data;},
              err=>{console.log(err);});

      }
    }
});