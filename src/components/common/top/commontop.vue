<template>
  <div class="top">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "commontop"
  }
</script>

<style scoped>
  .top{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 9;
  }
  .right,.left{
    width: 55px;
  }
  .center{
    flex:1
  }
</style>