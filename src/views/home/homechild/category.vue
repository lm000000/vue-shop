<template>
  <div id="category">
    <a v-for="item in recommends" :href="item.link">
      <img :src="item.image">
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "category",
    props:{
      recommends:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  #category{
    display: flex;
  }
  a{
   flex: 1;
    text-align: center;
  }
  img{

   width: 60px;
    height: 60px;
  }
</style>