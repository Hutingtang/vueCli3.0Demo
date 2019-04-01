<template>
<div class="home">
    <div>{{ food }}</div>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getInfo">请求getUserInfo接口</button>
    <button @click="getEasyMockInfo">请求easy-mock的接口</button>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {
    getUserInfo,
    getEasyMock
} from '@/api/user'
export default {
    name: 'home',
    props: {
        food: {
            type: String,
            default: "apple"
        }
    },
    components: {
        HelloWorld
    },
    //组件内的路由守卫
    // 路由进入之前的守卫 ,页面还未渲染
    beforeRouteEnter(to, from, next) {
        /*

        */
        console.log(to.name)
        console.log(from.name)
        next();
    },
    // 离开组件之前的守卫
    beforeRouteLeave(to, from, next) {
        const leave = confirm('您确定要离开此页面吗');
        if (leave) {
            next();
        } else {
            next(false); //不离开此页面，跳转行为失败
        }
    },
    methods: {
        getInfo() {
            // axios.post('/users/getUserInfo',{}).then(res =>{
            //     console.log(res)
            // })
            getUserInfo().then(res => {
                console.log(res, "res")
            })
        },
        getEasyMockInfo() {
            getEasyMock().then(res =>{
                console.log(res,'easy-mock');
            })
        }
    }

}
</script>
