<template>
  <div id="main1">
    <bottom>
      <bottom-item path="/vue1">
        <img slot="bottomItem1" src="~assets/images/tabbar/home.svg">
        <!--像这种../../路径  可以缩写 在build中webpack.base中的resolve的alias中-->
        <img slot="bottomItem2" src="~assets/images/tabbar/home_active.svg">
        <div slot="text">首页</div>
      </bottom-item>
      <bottom-item path="/vue2">
        <img slot="bottomItem1" src="../../../assets/images/tabbar/category.svg">
        <img slot="bottomItem2" src="../../../assets/images/tabbar/category_active.svg">
        <div slot="text">分类</div>
      </bottom-item>
      <bottom-item path="/vue3">
        <img slot="bottomItem1" src="../../../assets/images/tabbar/shopcart.svg">
        <img slot="bottomItem2" src="../../../assets/images/tabbar/shopcart_active.svg">
        <div slot="text">购物车</div>
      </bottom-item>
      <bottom-item path="/vue4">
        <img slot="bottomItem1" src="../../../assets/images/tabbar/profile.svg">
        <img slot="bottomItem2" src="../../../assets/images/tabbar/profile_active.svg">
        <div slot="text">我的</div>
      </bottom-item>
    </bottom>
  </div>
</template>

<script>
  import bottom  from "components/common/bottom/bottom";
  import bottomItem from "components/common/bottom/bottomItem";
  export default {
    name: "main1",
    components:{
      bottomItem,
      bottom
    }
  }
</script>

<style scoped>

</style>
