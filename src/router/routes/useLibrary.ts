export default [
  {
    path: '/element-plus',
    name: 'element-plus',
    component: () => import(/* webpackChunkName: "library" */'@/views/element-plus/index.vue'),
    meta: {
      isHideNav: true
    }
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "library" */'@/views/axios/index.vue'),
    meta: {
      isHideNav: true
    }
  }
]