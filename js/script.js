const { createApp } = Vue

createApp({
    data() {
        return {
            mail: ``,
            indirizzo: `https://flynn.boolean.careers/exercises/api/random/int`
        }
    },
    methods: {
        test() {
            console.log(axios.get(this.indirizzo));
        }
    }
}).mount('#vueApp');