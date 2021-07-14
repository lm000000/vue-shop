<template>
  <div>
   <me-top/>
    <div class="zhuce">
      <img src="~assets/images/profile/user.png" class="img1">
      <div class="denglu">
        <div>登录/注册</div>
        <div><img src="~assets/images/profile/phone.svg" class="img2">绑定手机号</div>
      </div>
      <div class="right">
        >
      </div>
    </div>
    <div class="xingxi">
      <span>您的账号为:laiM</span>
      <span class="qian">您的余额:0.0元</span>
    </div>
    <div class="bottom">
      <div><img src="~assets/images/profile/avatar.svg"><span>个人中心</span></div>
      <div><img src="~assets/images/profile/message.svg"><span>我的消息</span></div>
      <div><img src="~assets/images/profile/cart.svg"><span>我的购物车</span></div>
      <div><img src="~assets/images/profile/shopping.svg"><span>我的商品</span></div>
    </div>
  </div>
</template>

<script>
  import meTop from "./meTop";
  export default {
    name: "vue4",
    components: {meTop}
  }
</script>

<style scoped>
   .zhuce{
     height: 100px;
     width: 100%;
     background: #ff5777;

   }
   .img1{
    width: 70px;
    height: 70px;
    position: absolute;
    top:60px;
    left: 35px;
  }
   .img2{
     width: 20px;
     height: 20px;
   }
  .denglu{
    position: absolute;
    top:75px;
    left: 140px;
    color: white;
    font-size: 16px;
  }
  .right{
    position: absolute;
    right: 15px;
    color: white;
    top:75px;
    font-size: 36px;
  }
  .xingxi{
    height: 80px;
    font-size: 20px;
    width: 100%;
    line-height: 80px;
  }
  .qian{
    position: absolute;
    right: 10px;
  }
  .qian::before {
    content: "";
    width: 2px;
    height: 80px;
    background: #cccccc;
    position: absolute;
    left: -50px;
  }
  .bottom::before{
    content: "";
    width: 100%;
    height: 5px;
    background: #cccccc;
    position: absolute;
    top:-5px;
    left: 0;
  }
  .bottom{
    width: 100%;
    padding: 20px;
    position: relative;
  }
  .bottom img{
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .bottom div{
    margin-bottom: 20px;
    height:40px ;
    line-height: 40px;
  }
  .bottom span{
    position: relative;
    top:-10px
  }
</style>
