<template>
  <div>
    <back-top></back-top>
  </div>
</template>

<script>
  import backTop from "../../../components/content/backTop/backTop";
  export default {
    name: "detailTopback",
    components:{
      backTop
    }
  }
</script>

<style scoped>
    .backTop{
      bottom: 90px;
    }
</style>