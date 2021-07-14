<template>
  <div class="cartBottom">
   <img src="~assets/images/cart/tick.svg" class="check1"
    :class="{class2:cartBottom}"  @click="imgClick"
   > <span class="span1">全选</span>
    <span class="span2">总计:{{sum}}</span>
    <div class="right" @click="click1">去结算</div>
  </div>
</template>

<script>
  import Check from "./check";
  export default {
    name: "cartBotom",
    components: {Check},
    props:{
      cartBottom:{
        type:Boolean
      },
    },
    created() {
      this.getSum()
    },
    data(){
      return{
        sum:0
      }
    },
    methods:{
      imgClick(){
        this.$emit("img-click")
      },
      click1(){
        this.$store.commit("delete")
        this.sum=0
      },
      getSum(){
        for (let i = 0; i < this.$store.state.filter.length; i++) {
          this.sum +=this.$store.state.filter[i]
        }
      }
    },
  }
</script>

<style scoped>
  .class2{
    background: orange;
  }
  .cartBottom{
    background: pink;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 100px;
  }
  .check1{
    position: relative;
    top:20px;
    left: 20px;
    border: 1px solid;
    border-radius: 50%;
  }
  .span1{
    position: relative;
    top:18px;
    left: 30px;
  }
  .span2{
    position: relative;
    top:18px;
    left: 50px;
  }
  .right{
    position: relative;
    right: 0;
    width: 100px;
    line-height: 50px;
    height: 50px;
    background: red;
    text-align: center;
  }
</style>