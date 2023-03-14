import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    // 默认
    {
      path: '/',
      redirect: '/three-editor',
    },
    {
      path: '/three-editor',
      name: 'Three 编辑器',
      component: loadView('three-editor/three-editor'),
    },
  ],
})

function loadView(path = '') {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${path}`)
}
