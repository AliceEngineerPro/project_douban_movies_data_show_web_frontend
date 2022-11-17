import { createApp, } from 'vue'
import App from './App.vue'
import router from './router'
import '@/static/css/global.css'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// axios.defaults.baseURL = 'http://10.31.102.2:52015/api/private/v1'
axios.defaults.baseURL = 'http://127.0.0.1:52015/api/private/v1'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.config.globalProperties.$axios = axios

app.mount('#app')
