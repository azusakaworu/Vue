// js

let vm = new Vue({
el:'#app',
methods:{
   exchange(){this.cut = !this.cut}
},
data:{
	flag:true,
	cut:true
},


});