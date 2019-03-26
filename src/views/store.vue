<template>
<div>
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleValue" />
    <div>{{ inputValue }} -- last letter {{ inputValueLastLetter }}</div>
    <a-show :content='inputValue' />
    <p>appName:{{ appName }},appNameWithVersion:{{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, userNameFirstLetter:{{ userNameFirstLetter }}</p>
</div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import {
    mapState, mapGetters
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
            userName: state => state.user.userName
        }),
        ...mapGetters(['appNameWithVersion','userNameFirstLetter']),
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
        }
    }
}
</script>

<style>
</style>
