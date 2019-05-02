import Cookie from 'js-cookie'

// 与业务相结合的工具方法
export const setTitle = (title = 'admin') => {
  window.document.title = title;
}
/**
 * @description: 将token保存在cookie里面
 * @param {string} token:服务端返回的token 
 * @param {string} tokenName: token的名称 
 * @return {null}
 */
export const setToken = (token, tokenName = "token") => {
  Cookie.set(tokenName, token)
}
/**
 * @description: 获取cookie的token
 * @param {type} 
 * @return: 
 */
export const getToken = (tokenName = 'token') => {
  return Cookie.get(tokenName);
}
