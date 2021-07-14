<template>
  <div class="vue3">
    <commontop class="commontop">
      <div slot="center">
        购物车
      </div>
    </commontop>
    <div v-for="(item,index) in $store.state.cartList" class="list" :key="index">
      <check :check-item="checkItem" :price="item.price" :counter="item.counter"></check>
      <img :src="item.img" class="tu">
      <div class="wenzi1">
      <span>{{item.title}}</span>
      <div class="price">{{item.price}}</div>
      <div class="counter">x{{item.counter}}</div>
      </div>
    </div>
    <cart-botom  @img-click="bottomClick" :cart-bottom="checkItem"></cart-botom>
  </div>
</template>
<script>
  import commontop from "../../components/common/top/commontop";
  import check from "./check"
  import Category from "../home/homechild/category";
  import CartBotom from "./cartBotom";
  export default {
    name: "vue3",
    components:{
      CartBotom,
      Category,
      commontop,
      check
    },
    data(){
      return{
        checkItem:this.$store.state.checkItem,
        filter:[]
      }
    },
    methods:{
      bottomClick(){
        this.checkItem=!this.checkItem
      }
    }
  }
</script>

<style scoped>
  .vue3{
    height: 100vh;
    position: relative;
  }
    .commontop{
      background: deeppink;
      color: white;
    }
   .list{
     width: 100%;
     height: 170px;
     padding: 20px;
     position: relative;
   }
   .tu{
     height: 150px;
     width: 100px;
     margin-left: 25px;
   }
   .list::after{
     content: "";
     height: 2px;
     background: #666666;
     width: 100%;
     display: inline-block;
     position: relative;
     top:-175px
   }
  .wenzi1{
    position: relative;
    left: 140px;
    top:-150px;
    width: 60%;
    height: 170px;
    overflow: hidden;
  }
  .price{
    position: relative;
    bottom: -65px;
  }
  .counter{
    display: inline-block;
    position: relative;
    bottom: -45px;
    left: 200px;
  }
</style>
