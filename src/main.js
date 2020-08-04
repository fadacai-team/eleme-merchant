import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'
import axios from './common/myaxios'

// element-ui
import { 
  Button, 
  Select,
  Menu,
  MenuItem,
  MenuItemGroup,
  Header,
  Aside,
  Main,
  Submenu,
  Container,
  Collapse,
  Tag,
  Divider,
  Card,
  Row,
  Col,
  CollapseItem,
  Timeline,
  TimelineItem,
  TabPane,
  Upload,
  Dialog,
} from 'element-ui';
Vue
  .use(Button)
  .use(Select)
  .use(Menu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Main)
  .use(Aside)
  .use(Header)
  .use(Submenu)
  .use(Container)
  .use(Collapse)
  .use(Tag)
  .use(Divider)
  .use(Card)
  .use(Row)
  .use(Col)
  .use(CollapseItem)
  .use(Timeline)
  .use(TimelineItem)
  .use(TabPane)
  .use(Upload)
  .use(Dialog)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
