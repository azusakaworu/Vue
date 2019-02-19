//js

let vm = new Vue({
el:'#app',
computed:{
	newArr(){return this.arr.filter(item=>item == this.query);}
},
data:{
	query:'',
	flag:true, //true显示 false隐藏
	arr:[1,2,3,4,5]
}

});