export default [
  // 默认
  {
    path: '/',
    redirect: '/main/home',
  },
  // 错误
  {
    path: '*',
    name: 'error',
    component: loadView('Error'),
  },
]

function loadView(path) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/common/${path || ''}`
    )
}
