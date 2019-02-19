// js 

let vm = new Vue({
el:'#app',
data:{a:''},
computed:{
	//只有get 把msg对象方式写成函数方式
		msg(){
			if(this.a.length<3){return '少了'}
             if(this.a.length>6){return '多了'}
             	return '';
	          }		
	
	
}



});