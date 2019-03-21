<template>
    <div>
        I am parent
        <span @click="hello">123123</span>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    created () {
        console.log("123")
        console.log("123")
    },
    methods: {
      hello(){
          console.log("hello")
      }  
    }
}
</script>
