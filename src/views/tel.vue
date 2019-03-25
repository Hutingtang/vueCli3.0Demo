<template>
<div>{{ msg }}</div>
</template>

<script>
export default {
    data () {
        return {
            msg:'',
        }
    },
    mounted(){
        this.$bus.$on("on-click",mes => {
            this.msg = mes
        })
    }
}
</script>
