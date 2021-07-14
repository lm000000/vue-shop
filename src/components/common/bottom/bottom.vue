<template>
<div id="bottom">
  <slot></slot>
</div>
</template>

<script>
  export default {
    name: "bottom"
  }
</script>

<style scoped>
 #bottom{
   position: fixed;
   display: flex;
   bottom: 0;
   height: 100px;
   width: 100%;
   background: white;
   z-index: 999;
 }
</style>
