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
  SET_USER_NAME(state,params){
    state.userName = params.userName;
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
