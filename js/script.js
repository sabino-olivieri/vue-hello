const {createApp} = Vue;

createApp({
    data() {
        return {

            title: "Presentati utente",
            username: "",
            age: "",
            classResult: "",
            message: "",
            imagePath: ""
        }
    },

    methods: {
        send: function() {

            if(this.username === ""){ 
                return
            }
            if(this.age <= 0){
                return
            } 

            this.classResult = "mt-2 result";
            this.message = `Ciao ${this.username.toUpperCase()}`;
            this.username = "";
            this.age = ""; 

            if(this.age < 18) {
                this.imagePath = "./img/baby.svg";
            } else if(this.age >= 40) {
                this.imagePath = "./img/old.svg";
            } else {
                this.imagePath = "./img/young.svg";
            }
        }
    }
}).mount('#app');