<template>
  <div id="barControl">
   <div v-for="(item,index) in titles" class="barControlItem"
    :class="{active:currentIndex===index}"
    @click="butClick(index),faSon(index)">

     <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
  export default {
    name: "barControl",
    props:{
      titles:{
        type:Array
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      butClick(index){
        this.currentIndex=index
      },
      faSon(index){
        this.$emit("shouDao",index)
      }
    }
  }
</script>

<style scoped>
   #barControl{
     height: 50px;
     line-height: 50px;
     display: flex;
     text-align: center;
     /*position: sticky;*/
     position: relative;
     top:-2px;
     z-index: 99;
     background: white;
   }
  .barControlItem{
    flex: 1;
  }
  .active{
    color: #ff5777;
  }
  .active span{
    border-bottom: 2px solid #ff5777;
  }

</style>