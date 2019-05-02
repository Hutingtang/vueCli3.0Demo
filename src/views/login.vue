<template>
<div class="login_box">
    <input type="text" class="userName" placeholder="userName" v-model="userName">
    <input type="password" class="password" placeholder="password" v-model='password'>
    <button class="loginBtn" @click="hanldeLogin()">Login</button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(["login"]),
        handleLogin() {
            this.login({
                userName: this.userName,
                password: this.password
            }).then(()=>{
              console.log("登陆成功");
              this.$router.push({
                name:"home"
              })
            }).catch((e)=>{
              console.log(e)
            })
        }
    }
}
</script>

<style lang="less">
input {
    display: block;
    margin: 30px 0;
}
</style>
