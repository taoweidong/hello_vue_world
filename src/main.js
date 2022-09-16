import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//导入组件库
import ElementUI from "element-ui";
//导入组件相关样式
import "element-ui/lib/theme-chalk/index.css";
//配置Vue插件 将El安装到Vue上
Vue.use(ElementUI);
//引入axios
import axios from "axios";
//Vue对象使用axios
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
