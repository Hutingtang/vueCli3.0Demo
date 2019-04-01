import Mock from 'mockjs'
import {
  getUserInfo
} from './respones/user'
const Random = Mock.Random;
// 模拟接口数据
Mock.mock('/users/getUserInfo', "post", getUserInfo)

Mock.setup({
  timeout: 0
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})
// 导出数据
export default Mock
