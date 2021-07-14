<template>
  <div>
    <div v-for="item in detailInfo.detailImage" class="detailTu">
      <div class="key">{{item.key}}</div>
        <div v-for="item in item.list">
        <img :src="item" @load="imgLoad">
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailTu",
    props:{
      detailInfo:{
        type:Object
      }
    },
    data(){
      return{
        current:false
      }
    },
    methods:{
      imgLoad(){
        this.$emit("img-load")
        this.current=true
       /* setTimeout(()=>{
          if(!this.current) {
            this.$emit("img-load")
            this.current=true
          }
        },3000)
*/
      }
    }
  }
</script>

<style scoped>
  .detailTu{
    margin-top: 50px;
    position: relative;
  }
  .detailTu::before{
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background: #666666;
    top:-20px

  }
   .key{
      color: black;
      display: inline-block;
     margin-bottom: 15px;
     margin-left: 15px;

   }
</style>