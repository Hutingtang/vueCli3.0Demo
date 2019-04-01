import axios from './index'

export const getUserInfo = ()=>{
    return axios.request({
        url:'/users/getUserInfo',
        method: 'post',
    })
}

export const getEasyMock = () =>{
    return axios.request({
        url:"https://easy-mock.com/mock/5b3b46396c207841ee91fcae/test/getUserInfo",
        method:'post',
    })
}