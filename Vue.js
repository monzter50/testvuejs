var app = new Vue({ 
    el: '#app',
    data: {
        message: 'VueJS is pretty cool - ',
        name:'Jose Antonio',
        age:26,
        link:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        counter:0,
        x:0,
        y:0
    },
    methods:{
        multiplicar: function () {
            return this.age*3
        },
        increase:function(step, event){
            return this.counter+= step
        },
        coordinate:function(event){
                this.x=event.clientX,
                this.y=event.clientY   
        }
    }
});