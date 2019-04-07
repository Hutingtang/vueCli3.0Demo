<template>
<div class="split-pane-con">
    <split-pane :value.sync = 'offset'>
        <div slot="left">123123D</div>
        <div slot="right">iihii</div>
    </split-pane>
</div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  data(){
    return {
        offset:0.7
    }
  },
  components:{
      SplitPane
  }
}
</script>
<style>
    .split-pane-con{
        width: 500px;
        height: 300px;
        background: peachpuff;
    }
</style>