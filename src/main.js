import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 

const base = axios.create({
baseURL: 'https://nameless-mesa-33183.herokuapp.com/' //constante para guardar la URL
//baseURL: 'http://localhost:3000/' //constante para guardar la URL
})

Vue.config.productionTip = false

Vue.prototype.$http = base;   //URL donde está la API de login (backend) para las peticiones 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
