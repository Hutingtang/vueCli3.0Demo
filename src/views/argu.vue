<template>
<div>{{name}}</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: "Tom"
        }
    },
    // 组件守卫， 
    // 组件发生变化，内容被复用时调用
    beforeRouteUpdate(to, from, next) {
        console.log(to.name, from.name);
        next();
    }
}
</script>

<style>
</style>
