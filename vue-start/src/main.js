import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
// 挂载多个应用
createApp(App).mount('#app')
createApp(HelloWorld).mount('#app2')