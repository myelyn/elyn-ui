import { App } from 'vue'
import yContainer from './container.vue';
import yHeader from './header.vue';
import yFooter from './footer.vue';
import yMain from './main.vue';
import yAside from './aside.vue';

export default {
  install(Vue:App) {
    Vue.component(yContainer.name, yContainer)
    Vue.component(yHeader.name, yHeader)
    Vue.component(yFooter.name, yFooter)
    Vue.component(yMain.name, yMain)
    Vue.component(yAside.name, yAside)
  }
}