import { createApp } from 'vue';
// axios
import axios from 'axios';
// VueAxios
import VueAxios from 'vue-axios';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
// font-awesome
import { fas } from '@fortawesome/free-solid-svg-icons'; // font-awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 引用 element-plus
import ElementPlus from 'element-plus';
// element-plus-樣式
import 'element-plus/dist/index.css';
import * as icons from '@element-plus/icons-vue';
// element-繁體中文版.
import locale from 'element-plus/lib/locale/lang/zh-tw';
import _ from 'lodash';
import Loading from 'vue-loading-overlay';
// vue-alert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// google font
import 'material-icons/iconfont/material-icons.css';
// e-chart
import * as echarts from 'echarts'; // e-charts 圓餅圖
// 時間格式轉換
import moment from 'moment';
// 引入 I18n 套件
import i18n from './i18n/index';
// 深色模式
import 'element-plus/theme-chalk/dark/css-vars.css';
// 載入bootstrap全部js功能
import 'bootstrap/dist/js/bootstrap';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
// 全局註冊icons
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key]);
});

// Vue3全局註冊 無法單純使用app.use會報錯
app.config.globalProperties.library = library;
app.config.globalProperties.fas = fas;
app.config.globalProperties._ = _;
// 圓餅圖
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.FontAwesomeIcon = FontAwesomeIcon;
app.config.globalProperties.i18n = i18n;
app.config.globalProperties.$isLoading = false; // 預設轉圈讀條關閉
// 全局methods
app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return `$${value}`;
    // <p>{{ $filters.currencyUSD(accountBalance) }}</p> 全局註冊方法
  },
  dateTime(value) {
    return moment(value).format('MM-DD HH:mm a');
  },
  // 轉換成全數字格式
  dateTime2(value) {
    return moment(value).format('x');
  },
  // 轉換年月日時分秒
  dateTime3(value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
  },
  // 轉換成時間日期+秒數
  dateTime4(value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss a');
  },
  // 轉換成全數字格式
  dateTime5(value) {
    return moment(value).format('');
  },
};
app.component('Loading', Loading);
app.use(i18n);
app.use(_);
app.use(VueSweetalert2);
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus, { locale });
app.mount('#app');
