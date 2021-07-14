<template>
  <div id="app">
    <main1/>
    <keep-alive exclude="detail">   <!--取消detail的状态记录  不然会是得每次进入都是同一个iid-->
    <router-view/>
    </keep-alive>
  </div>
</template>
<script type="text/javascript">
  import  main1 from "./components/content/bottom/main1";
  export default {
    name:"App",
    components:{
      main1,
    },
  }
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
