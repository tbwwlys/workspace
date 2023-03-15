import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { 
  Button, Select, Row, Menu, Submenu, MenuItemGroup, MenuItem, Header, Container, Aside,
  Main

} from 'element-ui';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Row)
Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside) 
Vue.use(Main) 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
