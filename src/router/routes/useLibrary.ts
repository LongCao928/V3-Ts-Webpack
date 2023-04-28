export default [
  {
    path: '/element-plus',
    name: 'element-plus',
    component: () => import(/* webpackChunkName: "library" */'@/views/element-plus/index.vue')
  }
]