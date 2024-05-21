const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            indirizzo: `https://flynn.boolean.careers/exercises/api/random/mail`
        }
    },
    methods: {
        generaMails() {
            for (let i = 0; i < 9; i++) {
                let mail;
                axios.get(this.indirizzo).then((result) => {
                 mail = result.data.response;
                 this.mailList.push(mail); 
                });
            };
            console.log(this.mailList)
        }
    }
}).mount('#vueApp');