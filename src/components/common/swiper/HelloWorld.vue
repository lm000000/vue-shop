<template>
  <div class="helloWord">
  <div class="hello">
    <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      currentIndex:0,
      swiperStyle:{},
      totalWidth:0,
      sliderCount:0,
      scrolling:false
    }
  },
  /*当组件被挂载时调用*/
  mounted() {
     setTimeout(()=>{
       this.handDom()
       this.startTime()
     },100)
  },
  methods:{
    //创建DOM结构
    handDom(){
      let helloWorld=document.querySelectorAll(".hello")[0]
      let vue1=helloWorld.getElementsByClassName("vue1")[0]
      this.sliderCount=this.banners.length
      this.totalWidth=helloWorld.offsetWidth
      this.swiperStyle=vue1.style
    },

    //开始轮播
    startTime(){
      setInterval(()=>{
        this.currentIndex++
        this.scrollTime(-this.currentIndex*this.totalWidth)
        this.checkMove()
      },3000)
    },

    //过渡  设置每张图片过渡时间
    scrollTime(data){
      this.swiperStyle.transition = "all "+1+"s";
      this.scrollMove(data)
    },

    //判断移动
    checkMove(){
      if(this.currentIndex>=3){
         this.currentIndex=-1
      }
    },

    //移动
    scrollMove(data){
      this.swiperStyle.transform = `translate3d(${data}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${data}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${data}px), 0, 0`;
    }
  },
  props:{
    banners:{
      type:Array
    }
  },
}
</script>

<style scoped>
   .hello{
     width: 100%;
     overflow: hidden;
   }
</style>
