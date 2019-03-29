<template>
<div>
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleValue" />
    <!-- <input :value="stateValue" @input="changeStateValue"/> -->
    <input type="text" v-model="stateValue" name="" id="">
    <p>stateValue:{{ stateValue }}</p>
    <div>{{ inputValue }} -- last letter {{ inputValueLastLetter }}</div>
    <a-show :content='inputValue' />
    <p>appName:{{ appName }},appNameWithVersion:{{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, userNameFirstLetter:{{ userNameFirstLetter }}</p>
    <p>appVersion: {{ appVersion }}</p>
    <button @click="UpdateAppName">修改appName</button>
    <button @click="UpdateUserName">修改userName</button>
    <button @click="promiseUpdateAppName">接口获取AppName</button>
    <button @click="registerModule">注册vuex模块</button>
    <p v-for="(item,index) in todoList" :key="index">{{ item }}</p>
</div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
} from 'vuex'
export default {
    name: 'store',
    data() {
        return {
            inputValue: '',
        }
    },
    components: {
        AInput,
        AShow
    },
    computed: {
        // appName() {
        //     return this.$store.state.appName
        // },
        // userName() {
        //     return this.$store.state.user.userName
        // }
        // ...mapState(['appName'])
        ...mapState({
            appName: state => state.appName,
            userName: state => state.user.userName,
            appVersion: state => state.appVersion,
            todoList: state => state.todo ? state.todo.todoList : [],
            // stateValue: state => state.stateValue,
        }),
        stateValue:{
            get(){
                return this.$store.state.stateValue
            },
            set(value){
                this.SET_STATE_VALUE(value);
            }
        },
        ...mapGetters(['appNameWithVersion', 'userNameFirstLetter']),
        // ...mapGetters({
        //     appNameWiithVersion: getters =>{
        //         getters.appNameWithVersion
        //     }
        // }),
        // appNameWithVersion() {
        //     return this.$store.getters.appNameWithVersion
        // },
        inputValueLastLetter() {
            return this.inputValue.substr(-1, 1);
        }
    },
    methods: {
        handleValue(val) {
            this.inputValue = val;
        },
        ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME',"SET_STATE_VALUE"]),
        ...mapActions(['updateAppName']),
        //修改appName
        UpdateAppName() {
            // this.$store.commit('SET_APP_NAME','newAppName')
            // this.$store.commit('SET_APP_NAME',{
            //     appName:'newAppName'
            // })
            // this.$store.commit({
            //     type:"SET_APP_NAME",
            //     appName:"newAppName"
            // })
            // this.$store.commit({
            //     type:'SET_APP_VERSION'
            // })

            this.SET_APP_NAME({
                appName: 'newAppName'
            })
        },
        UpdateUserName() {
            this.SET_USER_NAME({
                userName: "newUserName"
            })
        },
        promiseUpdateAppName() {
            // this.$store.dispatch('updateAppName','123')
            this.updateAppName()
        },
        //注册模块
        registerModule() {
            // this.$store.registerModule(['user','todo'],{}) 在已有的模块下在注册模块
            this.$store.registerModule('todo', {
                state: {
                    todoList: [
                        '123',
                        '456'
                    ]
                },
                actions: {},
                mutations: {

                },
                getters: {}
            })
        },
        //绑定input事件，实现state的双向绑定
        // changeStateValue(val){
        //     console.log(val.target.value)
        //     this.SET_STATE_VALUE(val.target.value);
        // }
    }
}
</script>

<style>
</style>
