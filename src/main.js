import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'
import axios from './common/myaxios'
import ECharts from 'vue-echarts'
import  'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'

Vue.component('v-echart', ECharts)

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
  Input,
  Radio,
  RadioButton,
  RadioGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Calendar,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Option,
  OptionGroup,
  Upload,
  Dialog,
  DatePicker,
  Badge,
  MessageBox,
  Loading,
  Message,
  Notification,
  PageHeader,
  badge,
  rate,
  tag,
  Switch,
  Checkbox,
  CheckboxGroup,
} from 'element-ui';

Vue
  .use(Input)
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
  .use(Input)
  .use(Radio)
  .use(RadioButton)
  .use(RadioGroup)
  .use(Dropdown)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Calendar)
  .use(Tabs)
  .use(TabPane)
  .use(Table)
  .use(TableColumn)
  .use(Option)
  .use(PageHeader)
  .use(DatePicker)
  .use(Badge)
  .use(Upload)
  .use(Dialog)
  .use(OptionGroup)
  .use(Switch)
  .use(Checkbox)
  .use(CheckboxGroup,)
  .use(Loading.directive)
  .use(badge)
  .use(rate)
  .use(tag)
Vue.config.productionTip = false

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


Vue.config.productionTip = false

Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')