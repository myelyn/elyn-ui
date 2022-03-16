import {App} from 'vue'
import yButton from './button.vue'

export default {
  install(Vue: App) {
    Vue.component(yButton.name, yButton)
  }
}