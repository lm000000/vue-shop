<template>
  <div class="wrapper" ref="wrapper">
    <div class="scroll1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null,
      }
    },
    props:{
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },

    /*调用时要设置其高度*/
    mounted() {     //这里是挂载生命周期   是因为要获取wrapper节点
      this.scroll=new BScroll(document.querySelector(".wrapper"),{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
        click:true,
      })
      this.scroll.on("scroll",position=>{
        this.$emit("move",position)
      })
      this.scroll.on("pullingUp",()=>{
        this.$emit("pulling-up")
      })
    },
    methods:{
      scrollTo(x,y,time){

        //有一个小bug  就是可能图片加载的太快  导致scroll组件还没有挂载完  导致在vue1中获取不到refresh
        //所以 加上&&  当this.scroll 没有数据时不会执行
       this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finish(){
        this.scroll.finishPullUp()
      },
      refresh(){
        //刷新  重新获取scrollHeight(规定可滚动的区域)   等图片加载完后再次刷新
       this.scroll && this.scroll.refresh()
      },
      getPosition(){
        return this.scroll ? this.scroll.y :0
      }
    }
  }
</script>

<style scoped>
</style>