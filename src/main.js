/* eslint-disable import/no-unresolved */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import App from './App.vue';
import router from './router';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
