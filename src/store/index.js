import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import {
  saveInLocal
} from './plugin/saveInLocal'

Vue.use(Vuex)
export default new Vuex.Store({
  // strict:true, 严格模式，为true时state只能通过mutations来修改否则报错，为false的时候直接赋值则不会报错，
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal]
})
