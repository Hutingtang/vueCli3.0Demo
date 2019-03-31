import axios from './index'

export const getUserInfo = ()=>{
    return axios.request({
        url:'/users/getUserInfo',
        method: 'post',
    })
}