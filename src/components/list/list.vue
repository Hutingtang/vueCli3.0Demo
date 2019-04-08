<template>
<div>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <!-- <i v-if="!render">{{ item.name }}</i> -->
            <!-- <render-dom v-else :renderFunc='render' :name='item.name'></render-dom> -->
            <!--  作用域插槽-->
            <!-- <slot :name="item.name"></slot> -->
            <!-- 具名插槽 -->
            <slot name="itemName"></slot>
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
