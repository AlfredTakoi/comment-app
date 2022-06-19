import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
window.$ = window.jQuery = require('jquery')

import "bootstrap/dist/js/bootstrap.js"
import router from './router'
