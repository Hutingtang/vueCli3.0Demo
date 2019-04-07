<template>
<div>
    <counter :delay='delay' :endVal='endVal' :startVal='startVal'/>
</div>
</template>

<script>
import Counter from '_c/Counter.vue'
import AInput from '_c/AInput.vue'
export default {
    name: 'count-to',
    data() {
        return {
            delay: 1000,
            endVal: 3456,
            startVal: 1
        }
    },
    components: {
        Counter,
        AInput
    }
}
</script>

<style>
</style>
