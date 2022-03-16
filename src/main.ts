import { createApp } from 'vue'
import App from './App.vue'
import yContainer from './components/container'
import yButton from './components/button'
createApp(App)
  .use(yContainer)
  .use(yButton)
  .mount('#app')
