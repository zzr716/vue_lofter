# vue_lofter

> 一个仿lofte手机端的vue项目

## 项目描述

### 技术栈
Vue2.0全家桶 + axios + Vuex + Mint-ui + Mock.js + Stylus

### 预览效果
👉[预览地址(PC端建议在Chrome下开启调试模式或移动端浏览)](https://zzr716.github.io/vue_lofter/dist/index.html)  
👉[源码地址](https://github.com/zzr716/vue_lofter)✨✨求你的小星星～

### 主要依赖
  + Vue2.0 前端页面展示
  + Stylus css预编译
  + Axios 异步数据的请求
  + flexible.js 解决移动端设备兼容
  + better-scroll 优化滚动效果
  + Mint-ui 移动端组件库
  + mock 数据托管

### 路由结构
```
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


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

```
## 效果图
![lu.gif](https://i.loli.net/2017/10/23/59ee07922ca46.gif)
![lu1.gif](https://i.loli.net/2017/10/23/59ee0793a3039.gif)
![lu2.gif](https://i.loli.net/2017/10/23/59ee079058b8b.gif)
![lu3.gif](https://i.loli.net/2017/10/23/59ee079044c54.gif)
## 待完善功能

用户登录退出的实现  
关注用户内容出现在关注页  
评论的增加等
滑动效果

## 项目总结
>　历时半个多月的敲代码过程，终于完成了这款仿lofter的项目，通过这个项目熟悉了对Vue2.0的使用，在项目中使用vuex的状态管理模块，统一的状态的管理，让我们更好的去对数据操作，对axios的跨域问题有了更深了解。遇到问题时一定要去阅读文档，可以发现使用时遗漏或者没有注意的地方。打包文件时也要注意修改路径不然就踩坑了¬_¬。当然这个项目还有些功能没有实现，后续会进行完善的

## 最后
　　走过路过的各位大佬们，如果觉得我的项目还不错的，就请动动你们的小手，留下一颗宝贵的星✨✨吧~  
  本人18届毕业生，目前正在求职，对我感兴趣的可以通过以下方式联系我:  
  >
  + 邮箱：1047429135@qq.com  
  + 微信号：zzzrrr716
   
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue_lofter
