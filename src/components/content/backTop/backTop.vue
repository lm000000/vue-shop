<template>
  <div class="backTop">
    <img src="~assets/images/common/top.png">
  </div>
</template>

<script>
  export default {
    name: "backTop",
    methods:{

    }
  }
</script>

<style scoped>
  .backTop{
    position: fixed;
    bottom: 110px;
    right: 8px;
    z-index: 999;
  }
  .backTop img{
    width: 43px;
    height: 43px;
  }
</style>