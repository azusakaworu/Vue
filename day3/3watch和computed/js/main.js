// js
/*
computed 不支持异步
用watch代替


*/

let vm = new Vue({
el:'#app',
data:{a:'',msg:''},
watch:{//只有值变化的时候才会触发 支持异步setTimeout

	a(newVal,oldVal){//watch的属性名要和观察对象的名字一致
         // console.log(newVal,oldVal)
         this.msg="thinking......"
         setTimeout(()=>{
         	if(newVal.length<3){return this.msg='too short'}
         if(newVal.length>6){return this.msg='too long'}
         	this.msg ='';
     },2000)
         
	}
}


});