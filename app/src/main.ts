import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(vuetify) // vuetify追加
app.mount('#app')
