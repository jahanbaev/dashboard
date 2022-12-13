import { createApp } from 'vue'
import App from './App.vue'
import './../dist/output.css'
// eslint-disable-next-line no-unused-vars
import router from './route/route'
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';

createApp(App)
.use(router)
.use(DropZone)
.mount('#app')
