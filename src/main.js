// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from "axios"
import qs from "querystring"
import drag from '@/components/drag'
import Tabs from "./components/tabs"
import "./assets/font/iconfont.css"
import { Collapse, CollapseItem, Button, Input, Form, FormItem, Cascader } from 'element-ui';



Vue.prototype.$axios = Axios;
// Vue.prototype.HOST = "/baidu_music_api"
Vue.use(Cascader);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);
Vue.use(CollapseItem);
Vue.use(Collapse);
Vue.use(Tabs);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
