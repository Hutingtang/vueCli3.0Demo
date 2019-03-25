<template>
<div>
    <div>email:123123123</div>
    <button @click="handleClick">click</button>
</div>
</template>

<script>
export default {
    mounted() {

    },
    methods: {
        handleClick() {
            // 
            this.$bus.$emit("on-click", 'hello')
        }
    }
}
</script>
