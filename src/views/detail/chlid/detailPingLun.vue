<template>
  <div v-if="rate" class="rate">
    <div>用户评论</div>
    <div class="user" v-if="rate.list">
      <img :src="rate.list[0].user.avatar">
      <h4>{{rate.list[0].user.uname}}</h4>
      <p>{{rate.list[0].content}}</p>
      <span class="style">{{rate.list[0].style}}</span>
    </div>
    <div class="shopComment" v-if="rate.list" >
      <p>{{rate.list[0].explain}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailPingLun",
    props:{
      rate:{
        type:Object,
      }
    }
  }
</script>

<style scoped>
  .rate{
    position: relative;
    margin-top: 30px;
  }
  .rate::before{
    position: absolute;
    top: -15px;
    content: "";
    height: 2px;
    width: 100%;
    background: #a3a3a5;
  }
  .user{
    margin-top: 15px;
    position: relative;
    padding: 15px;
  }
  .user img{
    width: 70px;
    height: 70px;
  }
  .user h4{
    position: absolute;
    top: 40px;
    left: 100px;
  }
  .user p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user span{
    font-size: 14px;
    color: #a3a3a5;
    margin-left: 10px;
  }

  .shopComment p{
    margin-left: 30px;
    /*background: #a3a3a5;*/
    font-size: 10px;
    background: #a3a3a5;
  }
</style>