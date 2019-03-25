<template>
<div>
    <p>  AShow:{{ content }} </p>
</div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:{
      content:{
          type:[String,Number],
          default:''
      }
  }
}
</script>
<style>
</style>