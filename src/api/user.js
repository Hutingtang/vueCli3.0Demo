import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/users/getUserInfo',
    method: 'post',
  })
}

export const getEasyMock = () => {
  return axios.request({
    url: "https://easy-mock.com/mock/5b3b46396c207841ee91fcae/test/getUserInfo",
    method: 'post',
  })
}


export const login = ({
  userName,
  password
}) => {
  return axios.request({
    url: "/index/login",
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

//校验token的接口
export const checkToken = ()=>{
    return axios.request({
        url:'/user/authorization',
        method:'get',
    })
}
