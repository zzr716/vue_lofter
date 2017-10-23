import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueTouch from 'vue-touch'
import axios from 'axios'
// import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库
// import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'

// Vue.use(AlloyFingerVue, {
//   AlloyFinger
// })

axios.defaults.withCredentials = true
global.axios = axios

Vue.use(MintUI)
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

let history = {
  count:7,    //初识tab切换数量
  '/index':1,
  '/collection':2,
  '/follow':3,
  '/my':4
};
//设置初识sessionStorage
window.sessionStorage.setItem('history',JSON.stringify(history));


router.beforeEach(function (to, from, next) {
  let history = JSON.parse(window.sessionStorage.history);
  let historyCount = history.count * 1;
  const toIndex = history[to.path];        // 要去的索引
  const fromIndex = history[from.path];    //要离开的索引

  if (toIndex) {
      if (!fromIndex || parseInt(toIndex) > parseInt(fromIndex) || (toIndex === '0' && fromIndex === '0')) {
          history['transitionName'] = 'slide-left';
      } else {
          history['transitionName'] = 'slide-right';
      }
  } else {
      //如果当前路由没有在 sessionStorage 记录过得话，执行下面逻辑
      ++historyCount;
      history['count'] = historyCount;
      to.path !== '/' && (history[to.path] = historyCount);
      history['transitionName'] = 'slide-left';
  }

  history = JSON.stringify(history);

  window.sessionStorage.setItem('history',history);

  if (/\/http/.test(to.path)) {
      let url = to.path.split('http')[1];
      window.location.href = `http${url}`
  } else {
      next()
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
