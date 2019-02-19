// js

let vm = new Vue({
el:'#app',
methods:{
	parent(){alert('parent')},
	child(){alert('child')},
	grandson(){alert('grandson')}
},
data:{},


});