var app = new Vue({ 
    el: '#app',
    data: {
        message: 'VueJS is pretty cool - ',
        value:'',
        value2:""

    },
    methods:{
        alertMe: function () {
            alert("Hola Galan");
        },
        key:function(event){
            return this.value = event.target.value
        },
        entervalue:function(event){
            return this.value2 = event.target.value
        },
        coordinate:function(event){
                this.x=event.clientX,
                this.y=event.clientY   
        }
    }
});