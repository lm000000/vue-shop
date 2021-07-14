<template>
  <div>
    <div class="logo">
      <img :src="Shop.logo">
      <span>{{Shop.name}}</span>
    </div>
    <div class="shop">
      <div class="shopLeft">
        <div class="shopText">{{Shop.sells}}</div>
        <div >总销量</div>
      </div>
      <div class="shopCenter">
        <div class="shopText">{{Shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="shopRight">
        <div v-for="item in Shop.score">
          {{item.name}}
          {{item.score}}
          <span v-if="item.score<5" class="di">
            低
          </span>
          <span v-else class="gao">高</span>
        </div>
      </div>
    </div>
    <div class="enterShop">
      <span>进 店 逛 逛</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "detailShop",
    props:{
      Shop:{
        type:Object
      }
    }
  }
</script>

<style scoped>
  .logo{
    margin-top: 40px;
    height: 100px;
    padding: 10px;
    position: relative;
  }
  .logo img{
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .logo span{
    position: absolute;
    top:50px
  }
  .shop{
    display: flex;
    padding: 20px;
  }
  .shop>div{
    flex: 1;
  }
  .shopLeft,.shopCenter{
    text-align: center;
  }
  .shopText{
    font-size: 24px;
  }
  .shopRight>div{
    margin-bottom: 5px;
  }
  .shopRight .di{
    background: #5ea732;
  }
  .shopRight .gao{
    background: red;
  }
  .enterShop{
    text-align: center;
    position: relative;
  }
  .enterShop span{
    display: inline-block;
    width: 100px;
    height: 30px;
    background: #a3a3a5;
    border-radius: 10%;
    line-height: 30px;
     color: black;
  }
</style>