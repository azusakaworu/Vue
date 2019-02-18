//js 购物车小练习（1）

/*
专门用来发送Ajax的函数：
                       created:function(){}
                       用this调用在methods里写好的fetch data 的函数

专门写函数的地方 ： 
                methods:{} 
                
*/

let vm = new Vue({

	el:'#app',
  filters:{//可以有好多自定义过滤器
    toFixed(input,param1){//这里的this是window
      //参数input是管道符之前的东西 param1是toFixed中传递的参数
         return "$"+input.toFixed(param1);
        //return 100;
    }

  },
	data:{

		products:[],
    checkAll:false //默认false不全选
          },

    created:function(){this.getData();//调用函数 this是vm
                       },
    methods:{
      changeOne(){this.checkAll= this.products.every(item=>item.isSelected)},
      changeAll(){this.products.forEach(item=> item.isSelected = this.checkAll)},
      remove(p){this.products = this.products.filter(item=> item !==p);},
      getData:function(){//把这一套code封装到一个函数里
          axios.get("./carts.json").then(
               res=>{console.log(res);//res是自带的对象 定义形参给实参
                this.products=res.data;
                this.changeOne();//数据加载完成后 给checkAll赋予默认值
              },
              err=>{console.log(err);});

      }
    
    


    }
});