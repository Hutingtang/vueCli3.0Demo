import {
  getAppName
} from '@/api/app'
const actions = {
  //actions里面的都是异步函数
  // commit 去提交一个mutations
  // updateAppName({commit}){
  //     getAppName().then(res =>{
  //         console.log(res);
  //         const { code , info : {appName}} = res;

  //         commit('SET_APP_NAME',{appName})
  //     }).catch(err =>{
  //         console.log(err);
  //     })
  //     // 运用 async await 简化promise

  // }
  async updateAppName({
    commit
  }) {
    try {
      const {
        code,
        info: {
          appName
        }
      } = await getAppName();
      commit('SET_APP_NAME', {
        appName
      });
    } catch (error) {
      console.log(error)
    }
  }
}
export default actions
