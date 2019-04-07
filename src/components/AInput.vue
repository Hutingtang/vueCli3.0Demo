<template>
<input @input="handleInput" :value="value" placeholder="1231111"/>
</template>

<script>
export default {
    name: 'AInput',
    data() {
        return {}
    },
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    methods: {
        handleInput(e) {
            const value = e.target.value;
            this.$emit("input", value);
        }
    }
}
</script>

<style>
</style>
