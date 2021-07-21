const CALCULATOR = {
    data() {
        return {
            binary: '',
            decimal: 0,
            alert_message: false,
            result: false
        }
    },
    watch: {
        binary(n, o){
            this.alert_message = false
            this.result = false
            n.split('').map((char) => {
                if (char !== '0' && char !== '1'){
                    this.alert_message = true
                    this.result = false
                } else {
                    this.result = true
                }
            })
            this.decimal = parseInt(n,2)
        }
    }
}

Vue.createApp(CALCULATOR).mount('#app')
