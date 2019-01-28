//js

/*v-for循环  最常见的就是用于数组，其他都不常见

二维数组 ： 数组套数组 不可能有三维的了 性能降低
复杂的：对象套对象套对象

---------*/

let vm = new Vue({

    el:'#app',
    data:{  msg:"welcome,ling!0-0",

            fruites:[
                {name:"香蕉", color:["yellow","blue"]},
                {name:"西瓜", color:["red","white"]},
                {name:"橘子", color:["orange","balck"]}
            ],

            obj :{name:"swk",age:800,gender:"nan"}





          }

});