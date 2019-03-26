// 与用户相关的vuex
const state = {
  // 
  userName: 'user'
}
const getters = {
    userNameFirstLetter:(state)=>{
        return state.userName.substr(1,1);
    }
}
const mutations = {
  // 
}

const actions = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
