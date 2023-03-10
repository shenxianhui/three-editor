import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules'
import CommonRouters from './common'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', // 需要服务端支持
  // scrollBehavior: () => ({ y: 0 }),
  routes: RouterConfig.concat(CommonRouters),
})
