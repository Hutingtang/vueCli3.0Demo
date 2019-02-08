import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    alias: '/home',//别名路由
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 组件是函数导入时，实现组件的来加载
    component: () => import('@/views/About.vue')
  },
  // 动态路由匹配
  {
    path: '/argu/:name',
    component: () => import("@/views/argu.vue")
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',
      component: () => import("@/views/child.vue")
    }]
  },
  // ，命名视图
  {
    path: '/named_view',
    //显示多个组件
    components: {
      default: () => import("@/views/child.vue"),
      email: () => import("@/views/email.vue"),
      tel: () => import("@/views/tel.vue")
    }
  },
  // 重定向
  {
    path:'/main',
    // redirect: '/'
    redirect: to =>{
      return {name:'home'}
    }
  }
]
