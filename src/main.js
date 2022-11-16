import { createApp, } from 'vue'
import '@/static/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://10.31.102.2:52015/api/private/v1'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.config.globalProperties.$axios = axios

app.mount('#app')
