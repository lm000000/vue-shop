<template>
  <div class="detailRecommend">
    <div class="tupain2"><product-item :items="items"></product-item>
    </div>
  </div>
</template>

<script>
  import productItem from "../../../components/content/productItem/productItem";
  export default {
    name: "detailRecommend",
    components:{
      productItem
    },
    data(){
      return{
        wenzi:"推荐"
      }
    },
    props:{
      items:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .detailRecommend{
    margin-top: 30px;
    display: flex;
    position: relative;
  }
  .detailRecommend::before{
    content: "";
    height: 2px;
    background: #a3a3a5;
    position: absolute;
    width: 100%;
  }
  .tupain2{
    margin-top: 50px;
  margin-left: 25px;
  }

</style>