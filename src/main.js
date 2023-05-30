import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery'
import 'popper.js'
import './assets/scss/style.scss'

createApp(App)
.use(store)
.use(router)
.mount('#app')
