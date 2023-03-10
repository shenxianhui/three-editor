export default [
  {
    path: '/main',
    component: { render: f => f('router-view') },
    children: [
      {
        path: 'about',
        name: 'about',
        component: loadView('About'),
      },
    ],
  },
]

function loadView(path) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${path || ''}`)
}
