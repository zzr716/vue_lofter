import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Router.prototype.goBack = function () {
//   this.isBack = true
//   window.history.go(-1)
// }

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/found/index'], resolve),
      redirect: '/found/page1'
    },
    {
      path: '/found',
      name: 'found',
      component: resolve => require(['@/pages/found/index'], resolve),
      meta: {keepAlive: true},
      children: [
        {
          path: '',
          component: resolve => require(['@/pages/found/index'], resolve)
        },
        {
          path: 'page1',
          name: 'page1',
          component: resolve => require(['@/pages/found/recommend'], resolve)
        },
        {
          path: 'page2',
          name: 'page2',
          component: resolve => require(['@/pages/found/animal'], resolve)
        },
        {
          path: 'page3',
          name: 'page3',
          component: resolve => require(['@/pages/found/movie'], resolve)
        },
        {
          path: 'page4',
          name: 'page4',
          component: resolve => require(['@/pages/found/travel'], resolve)
        },
        {
          path: 'page5',
          name: 'page5',
          component: resolve => require(['@/pages/found/food'], resolve)
        },
        {
          path: 'page6',
          name: 'page6',
          component: resolve => require(['@/pages/found/pen'], resolve)
        },
        {
          path: 'page7',
          name: 'page7',
          component: resolve => require(['@/pages/found/photo'], resolve)
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/home/index'], resolve)
    },
    {
      path: '/message',
      name: 'message',
      component: resolve => require(['@/pages/message/msg'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/pages/my/index'], resolve)
    }
  ]
})
