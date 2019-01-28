//js


/*实现双向绑定原理：
defineProperty(); ex5 的方法
*/
let vm = new Vue({

	el:'#app',
	data:{
		msg:"hello!!"
	}
});