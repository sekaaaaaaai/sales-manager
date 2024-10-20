import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'

const app = createApp(App)
app.use(router) // router追加
app.use(vuetify) // vuetify追加
app.mount('#app')
