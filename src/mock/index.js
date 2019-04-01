import Mock from 'mockjs'
import {
  getUserInfo
} from './respones/user'
// 模拟接口数据
Mock.mock('/users/getUserInfo', "post", getUserInfo)

// 导出数据
export default Mock
