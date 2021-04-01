import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    // 重定向  无论哪个页面点进来都首先显示这个页面
    path:'/',
    redirect: '/main'
  },
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: () => import('../veiws/Main.vue'),
    children:[ // 开始嵌套 路由 这下面的路由都是Main的子路由
      {
        path: '/', //默认路由
        redirect: '/index'
      },
      {
        path:'/index', // 首页路由
        name: 'Index',
        component: () => import('../veiws/Index.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../veiws/Setting.vue')
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import('../veiws/Map.vue')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('../veiws/Posts.vue')
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('../veiws/Table.vue')
      },
      {
        path: '/edit',
        name: 'Edit',
        component: () => import('../veiws/Edit.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../veiws/404.vue')
  }
]

const router =  new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
