import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle, getToken } from '@/lib/util'
import store from '@/store'
import { setToken } from '../lib/util';
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const HAS_LOGIN = true //模拟一个已登陆状态
//注册一个全局前置守卫,跳转之前
router.beforeEach((to, from, next) => {
  /*
    to 是即将跳转去的路由
    form 是当前准备离开的路由
    next 确定跳转函数
  */
  to.meta && to.meta.title && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGIN) {
      next();
    } else {
      next({
        name: 'login'
      });
    }
  } else {
    if (HAS_LOGIN) {
      next({
        name: "home"
      })
    } else {
      next();
    }
  }
  // const token = getToken();
  // if(token){
  //   //有token时，先判断token是否是有效的
  //   store.dispatch('anthorization',token).then(()=>{
  //     if(to.name == 'login'){
  //       next({name:"home"})
  //     }else{
  //       next();
  //     }
  //   }).catch((e)=>{
  //     setToken('');
  //     next({name:"login"})
  //   })
  // }else{
  //   // 没有token直接跳到登陆页面
  //   next({name:"login"})
  // }

})
// router.beforeResolve() 参数类似于 beforeEach 
// 注册一个跳转之后的 后置钩子
router.afterEach((to,from) => {
  // 该函数不能阻止跳转
})

/**
 * 
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 befroeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用具体路由的独享守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件中调用beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航确定
 * 10. 调用全局的后置守卫 afterEach
 * 11. DOM更新
 * 12. 用创建好的实例调用beforeRouteEnter守卫里的传给next()的回调函数
 */
export default router
