<template>
  <div>
    <img :src="img">
  </div>
</template>
<script>
  import img from  "assets/images/home/recommend_bg.jpg"
  export default {
    name: "recommend",
    data(){
      return{
        img
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
    height: 300px;
  }
</style>