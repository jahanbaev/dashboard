import { createApp } from 'vue'
import App from './App.vue'
import useVuelidate from '@vuelidate/core'

import './../dist/output.css'
import router from './route/route'
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

createApp(App)
.use(router)
.use(useVuelidate)
.use(DropZone)
.mount('#app')
