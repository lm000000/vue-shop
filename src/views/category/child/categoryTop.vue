<template>
  <div>
    <commontop class="center">
      <div slot="center" >分类中心</div>
    </commontop>
  </div>
</template>

<script>
  import commontop from "../../../components/common/top/commontop";
  export default {
    name: "categoryTop",
    components: {commontop}
  }
</script>

<style scoped>

  .center {
    color: white;
    background: deeppink;
  }
</style>