import { login, checkToken} from "@/api/user";
import { setToken, getToken } from "@/lib/util";
// 与用户相关的vuex
const state = {
  //
  userName: "user"
};
const getters = {
  userNameFirstLetter: state => {
    return state.userName.substr(1, 1);
  }
};
const mutations = {
  //
  SET_USER_NAME(state, params) {
    state.userName = params.userName;
  }
};

const actions = {
  updateUserName({ commit, state, rootState, dispatch }) {
    // rootState.appName
    dispatch("xxx", "");
  },
  xxx() {},
  login({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      })
        .then(res => {
          // console.log("res")
          //登录成功后，将后端返回的token存入cookie中
          if (res.code == 200 && res.data.token) {
            const { token } = res.data;
            setToken(token);
            resolve();
          } else {
            //
            reject(new Error("login error"));
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  },
  anthorization({ commit }, token) {
    return new Promise((resolve,reject)=>{
        checkToken().then(res =>{
          if(res.code == 401){
            reject(new error("err"))
          }else{
            resolve();
          }
        }).catch((e)=>{
          reject(e)
        })
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  modules: {
    //
  }
};
