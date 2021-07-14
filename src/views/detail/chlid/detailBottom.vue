<template>
  <div class="detailBottom">
    <div class="gwc">恭喜你,添加成功</div>
    <div class="left">
      <div>
        <div class="img"><img src="~assets/images/detail/detail_bottom.png"></div>
        <div>客服</div>
      </div>
      <div>
        <div class="img"><img src="~assets/images/detail/detail_bottom.png"></div>
        <div>店铺</div>
      </div>
      <div>
        <div class="img"> <img src="~assets/images/detail/detail_bottom.png"></div>
        <div>商家</div>
      </div>
    </div>
    <div class="right">
      <div @click="divClick">
        <div>加入购物车</div>
      </div>
      <div>
        <div>购买</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottom",
    methods:{
      divClick(){
        document.querySelector(".gwc").className+=" gwc1"
        this.$emit("cart-click")
        setTimeout(()=>{
          document.querySelector(".gwc").className=" gwc"
        },500)

      }
    }
  }
</script>

<style scoped>
   .detailBottom{
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     height: 80px;
     background: white;
     display: flex;
   }
   .left,.right{
     flex:1
   }
  .left{
    display: flex;
    text-align: center;
  }
  .left>div{
    flex:1;
  }
  .img{
    width: 50px;
    height: 50px;
    overflow: hidden;
    position: relative;
    left: 10px;
    /*top:10px*/
  }
  .left>div:nth-child(1) img{
    overflow: hidden;
   position: relative;
   top:-100px
  }
   .left>div:nth-child(2) img{
     position: relative;
     top:-190px
   }
   .left>div:nth-child(3) img{
     position: relative;
     top:5px
   }
  .right{
    display: flex;
    text-align: center;
    line-height: 80px;
  }
  .right>div{
    flex:1
  }
  .right>div:nth-child(1){
    background: yellow;
  }
  .right>div:nth-child(2){
    background: deeppink;
  }
  .gwc{
    position: absolute;
    top:-300px;
    left: 140px;
    background: #666666;
    color: white;
    width: 0;
    overflow: hidden;
  }
  .gwc1{
    width: 120px;
    transition: all 0.5s;
  }
</style>