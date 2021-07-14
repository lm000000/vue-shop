<template>
  <div>
    <commontop class="center"><div slot="center">首页</div></commontop>
  </div>
</template>

<script>
  import commontop from "../../common/top/commontop"
  export default {
    name: "contenttop",
    components:{
      commontop
    }
  }
</script>

<style scoped>
    .center{
      color: white;
      background: deeppink;
      /*这里的top 不用设置成为fixed 因为他这里滚动的是自己定义的滚动区域 不是系统的区域*/
     /* position: fixed;         !*position:fixed 会与flex产生冲突 可以在外面在套一个div并且要设置left 和right*!
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;*/
    }

</style>