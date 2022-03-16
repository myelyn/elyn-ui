import { App } from 'vue'
import yContainer from './container.vue';
import yHeader from './header.vue';
import yFooter from './footer.vue';
import yMain from './main.vue';
import yAside from './aside.vue';

export default {
  install(Vue:App) {
    Vue.component('YContainer', yContainer)
    Vue.component('YHeader', yHeader)
    Vue.component('YFooter', yFooter)
    Vue.component('YMain', yMain)
    Vue.component('YAside', yAside)
  }
}