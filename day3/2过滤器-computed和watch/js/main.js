// js 全选全不选功能

let vm = new Vue({
el:'#app',
computed:{
	checkAll:{
		get(){//返回什么结果 就会赋予给checkAll属性
			return this.products.every(item=>item.isSelected)
		},
		//value是给checkAll赋予值的时候传递过来的
		set(value){this.products.forEach(item=>item.isSelected=value);}
	}
},
data:{
	products:[{isSelected:true},{isSelected:true}]
},


});