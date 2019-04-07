<template>
<div>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <i v-if="!render">{{ item.name }}</i>
            <render-dom v-else :renderFunc='render' :name='item.name'></render-dom>
        </li>
    </ul>
</div>
</template>

<script>
import RenderDom from '_c/render-dom.js'
export default {
    data() {
        return {}
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        render: {
            type: Function,
            default: () => {}
        }
    },
    components:{
        RenderDom,
    }
}
</script>

<style>
</style>
