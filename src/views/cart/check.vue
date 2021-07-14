<template>
  <div>
    <img src="~assets/images/cart/tick.svg" class="check" :class="{class1:checkItems}"
    @click="imgClick"
    >
  </div>
</template>

<script>
  export default {
    name: "check",
    data(){
      return{
        checkItems:this.checkItem,
        price1:this.price,
        counter1:this.counter,
        sum:0
      }
    },
    props:{
      checkItem:{
        type:Boolean,
        default:false
      },
      price:{
        type:String
      },
      counter:{
        type:Number
      }
    },
    watch:{
      checkItem(n,o){
        this.checkItems=n
      },
    },
    activated() {
      this.sum=parseInt(this.price.replace("¥",""))*this.counter
      if(this.checkItems===true) {
        this.$store.commit("getFilter",this.sum)
      }
    },
    methods:{
      imgClick(){
          this.checkItems=!this.checkItems
      },
    }
  }
</script>

<style scoped>
  .check{
    width: 20px;
    height: 20px;
    position: relative;
    top:80px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid;
  }
  .class1{
    background: orange;
  }
</style>