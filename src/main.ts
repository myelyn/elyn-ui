import { createApp } from 'vue'
import App from './App.vue'
import yContainer from './components/container'
createApp(App)
  .use(yContainer)
  .mount('#app')
