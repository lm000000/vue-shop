<template>
<div id="bottomItem" @click="divClick">
  <div v-if="!isActive()"><slot name="bottomItem1"></slot></div>
  <div v-else><slot name="bottomItem2"></slot></div>
  <div id="a"><slot name="text"></slot></div>
</div>
</template>

<script>
  export default {
    name: "bottomItem",
    props:{
      path:String,
    },
    methods:{
      divClick(){
        this.$router.push(this.path)
      },
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      }
    },
  }
</script>

<style scoped>
 #bottomItem{
   float: left;
   text-align: center;
   flex: 1;
   z-index: 9;
 }
</style>
