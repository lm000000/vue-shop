<template>
  <div>
    <commontop >
      <div slot="left" class="slotLeft" @click="leftClick">
        <img src="~assets/images/common/back.svg">
      </div>
      <div slot="center" class="slotCenter">
        <div v-for="(item,index) in navItem" class="slotItem"
        :class="{active:currentIndex===index}" @click="butClick(index)"
        >
       {{item}}<span class="index1">{{scrollIndex}}</span>
        </div>
      </div>
    </commontop>
  </div>
</template>

<script>
  import commontop from "../../../components/common/top/commontop";
  export default {
    name: "navChild",
    components:{
      commontop
    },
    data(){
      return{
        navItem:["商品","参数","评论","推荐"],
        currentIndex:0
      }
    },
    props:{
     scrollIndex:{
       type:Number,
       default:0
     }
    },
    computed:{
    },
    watch:{    //监听props 数据发生改变时
     scrollIndex(value){
       this.currentIndex=value
      },
    },
    methods:{
      butClick(index){
        this.currentIndex=index
        this.$emit("nav-child",index)
      },
      leftClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .slotCenter{
    display: flex;
  }
  .slotItem{
    flex:1
  }
  .slotLeft{
    margin-top: 10px;
  }
  .active{
   color: #ff5777;
  }
  .index1{
    display: none;
  }

</style>