// js
/*
computed 不支持异步
用watch代替


*/

let vm = new Vue({
el:'#app',
computed:{
	fullName(){return this.firstName+this.a+this.lastName}
},
data:{
	
	firstName:'Ling',
	lastName:'Ding',
	a:''
	
},




});