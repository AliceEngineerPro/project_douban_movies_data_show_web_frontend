import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// ElementPlus(全局)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 全局样式
import '@/static/css/global.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
