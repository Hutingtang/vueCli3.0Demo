import Vue from 'vue'
const mutations = {
    SET_APP_NAME(state,params){
        state.appName = params.appName;
    },
    SET_APP_VERSION(state){
        //vue.set() 设置新的state，并更新视图
        Vue.set(state,"appVersion","v2.0")
    },
    SET_STATE_VALUE(state,params){
        state.stateValue = params;
    }
}

export default mutations