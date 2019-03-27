<template>
<div>
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleValue" />
    <div>{{ inputValue }} -- last letter {{ inputValueLastLetter }}</div>
    <a-show :content='inputValue' />
    <p>appName:{{ appName }},appNameWithVersion:{{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, userNameFirstLetter:{{ userNameFirstLetter }}</p>
    <p>appVersion: {{ appVersion }}</p>
    <button @click="UpdateAppName">修改appName</button>
    <button @click="UpdateUserName">修改userName</button>
</div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import {
    mapState,
    mapGetters,
    mapMutations
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
            appVersion: state => state.appVersion
        }),
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
        ...mapMutations(['SET_APP_NAME','SET_USER_NAME']),
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

            this.SET_APP_NAME({appName:'newAppName'})
        },
        UpdateUserName(){
            this.SET_USER_NAME({userName:"newUserName"})
        }
    }
}
</script>

<style>
</style>
