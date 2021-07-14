<template>
  <div>
    <div class="title">[{{Shop.name}}]--  {{Goods.title}}</div>
    <div class="price">
    <span class="newPrice">{{Goods.newPrice}}</span>
    <span class="oldPrice">{{Goods.oldPrice}}</span>
    <span class="discount">{{Goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="item in Goods.columns" class="columnsItem">
        {{item}}
      </span>
    </div>
    <div class="services">
      <span v-for="item in Goods.services" class="servicesItem">
       <img :src="item.icon">{{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailGoods",
    created() {
    },
    props:{
      Goods:{
        type:Object
      },
      Shop:{
        type:Object
      }
    },
  }
</script>

<style scoped>
   .title{
     text-indent: 2em;
     padding: 10px;
     color: black;
   }
   .price{
     padding: 10px;
     position: relative;
   }
  .newPrice{
    font-size: 36px;
    color: #ff5777;
    margin-right: 10px;
  }
  .oldPrice{
    position: relative;
  }
  .oldPrice::before{
    content: "";
    width: 100%;
    height: 2px;
    background: #666666;
      position: absolute;
      top:8px
  }
  .discount{
    display: inline-block;
    position: absolute;
    width: 70px;
    height: 20px;
    background: deeppink;
    text-align: center;
    border-radius: 20%
  }
  .columns{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    opacity: 0.5;
    position: relative;
  }
  .columns::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    opacity: 0.3;
    background: black;
    top:40px
  }
  .services{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    position: relative;
  }
  .servicesItem{
    font-size: 12px;
  }
  .servicesItem img{
    width: 15px;
    height: 15px;
  }
   .services::after{
     position: absolute;
     content: "";
     width: 100%;
     height: 4px;
     opacity: 0.1;
     background: black;
     top:40px
   }
</style>