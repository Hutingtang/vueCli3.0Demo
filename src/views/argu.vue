<template>
  <div>{{$route.params.name}}</div>
</template>
<script>
export default {
    created(){
        console.log($route.params.name)
    }
}
</script>
<style>
</style>
