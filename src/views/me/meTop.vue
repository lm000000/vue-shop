<template>
  <div>
    <commontop class="center">
      <div slot="center" >个人首页</div>
    </commontop>
  </div>
</template>

<script>
  import commontop from "../../components/common/top/commontop";
  export default {
    name: "meTop",
    components: {commontop}
  }
</script>

<style scoped>
  .center {
    color: white;
    background: deeppink;
  }
</style>