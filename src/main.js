import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';

createApp(App).use(router, Toaster).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
import router from './router'
