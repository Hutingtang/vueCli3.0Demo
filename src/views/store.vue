<template>
<div>
    <!-- <a-input v-model="inputValue" /> -->
    <a-input @input="handleValue" />
    <div>{{ inputValue }}</div>
    <a-show :content='inputValue' />
</div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
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
    methods:{
        handleValue(val){
            this.inputValue = val;
        }
    }
}
</script>

<style>
</style>
