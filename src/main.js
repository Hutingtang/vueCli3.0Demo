import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
if(process.env.NODE_ENV !== 'production'){
  require('./mock')
}
Vue.config.productionTip = false

Vue.prototype.$bus = Bus;
/**
 * render 函数
 * @param 第一个参数是需要渲染的节点，第二个参数是对象 传入配置,第三个参数可以是数组或者字符串，表示节点内容
 * render('div',{
 *  attrs:{
 *  id:'box'
 * },
 * style:{
 *  color: 'red'
 * }
 * },[
 *  h('span','123')
 * ])
 * 
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
