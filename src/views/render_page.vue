<template>
<div>
    <list :list='itemArr' :render='renderFunc'></list>
</div>
</template>

<script>
import List from '_c/list'
export default {
    data() {
        return {
            itemArr:[
                {name:'123'},
                {name:'123'},
                {name:'123'},
            ]
        }
    },
    components:{
        List,
    },
    methods:{
        renderFunc(h,name){
            return h('i',{
                style:{
                    color:'red'
                }
            },name)
        }
    }
}
</script>

<style>
</style>
