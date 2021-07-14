<template>
  <div class="vue1" >
    <contenttop/>
    <bar-control :titles="titles" @shouDao="barControlIndex"
                 ref="barControl2" v-show="barControlShow">
    </bar-control>
    <Scroll class="wrapper" ref="scroll" :probe-type="3" :pull-up-load="true"
    @move="scrollMove"  @pulling-up="pullingUp"
    >
    <lunbo :banners="banners" @luboLoad="luboLoad()"></lunbo>
    <category :recommends="recommends"></category>
     <recommend/>
    <bar-control :titles="titles" @shouDao="barControlIndex" ref="barControl1"></bar-control>
    <product-item :items="products[currentProducts].lists" class="productItem"
    ></product-item>
   </Scroll>
    <back-top @click.native="backTop()" v-show="currentBackTop"></back-top>
  </div>
</template>

<script>
  import lunbo from "./homechild/lunbo"
  import category from "./homechild/category";
  import recommend from "./homechild/recommend";

  import contenttop from "../../components/content/top/contenttop";
  import barControl from "../../components/content/barControl/barControl";
  import productItem from "../../components/content/productItem/productItem";
  import backTop from "../../components/content/backTop/backTop";
  import Scroll from "../../components/common/scroll/Scroll";

  import {fun1,fun2} from "network/main"

  export default {
    name: "vue1",
    data(){
      return {
        banners:[],
        recommends:[],
        titles: ['流 行','新 款','精 选'],
        products:{
          "pop":{page:0,lists:[]},
          "new":{page:0,lists:[]},
          "sell":{page:0,lists:[]},
        },
        currentProducts:"pop",
        currentBackTop:false,    //是否显示放回到最前面的图标
        barControlTop:0,
        barControlShow:false,
        getPosition:0
      }
    },
    created() {
     this.lunBo()
      //获取请求的数据
     this.tuPianItem("pop")
     this.tuPianItem("new")
     this.tuPianItem("sell")
    },
    mounted(){
      //接受事件总线的事件
      const refresh=this.debounce(this.$refs.scroll.refresh,10)
      this.$bus.$on("imageLoad",()=>{
        // this.$refs.scroll.refresh()
        refresh()
      })
    },
    //当你跳转到其他路由时  之前的路由时被销毁的  若是想不销毁 则添加keep-alive
    destroyed() {
      console.log("组件被销毁")
    },

    //当组件活跃时跳转到之前保持的位置中
    activated() {
      this.$refs.scroll.scrollTo(0,this.getPosition,0)
      this.$refs.scroll.refresh()
    },

    //当路由不活跃时  记录当前滚动区域的位置
    deactivated() {
      this.getPosition=this.$refs.scroll.getPosition()
    },
    methods:{
      //轮播图片加载完成   在去获取barControl的 offsetTop
      luboLoad(){
        // $refs.barControl1 获取到组件对象   $el组件对象的方法  可以获取到该组件整个的元素
        this.barControlTop=this.$refs.barControl1.$el.offsetTop
      },
      
      //轮播
      lunBo(){
        fun1().then(response=>{
          this.banners=response.data.data.banner.list
          this.recommends=response.data.data.recommend.list
          // console.log(response,"轮播")
        })
      },

      //将请求的数据传给变量
      tuPianItem(type){
       const page=this.products[type].page+1
        fun2(type,page).then(response=>{
         for(let b of response.data.data.list){
           this.products[type].lists.push(b)
         }
          this.products[type].page +=1
          // console.log(response,"图片")
        })
      },

      //根据点击不同的导航展现不同的衣服
      barControlIndex(index){
        switch (index) {
          case 0:
            this.currentProducts="pop"
            break
          case 1:
            this.currentProducts="new"
            break
          case 2:
            this.currentProducts="sell"
            break
        }

        //使这两个barControl 点击的标签保持一致
        this.$refs.barControl1.currentIndex=index
        this.$refs.barControl2.currentIndex=index
      },
      //放回到最前面
      backTop(){
         this.$refs.scroll.scrollTo(0,0,300)
      },


      scrollMove(position){
        //是否隐藏
        this.currentBackTop= (-position.y) > 1000

        //判断 batControl 是否隐藏
        if(this.barControlTop<=(-position.y)){
          this.barControlShow=true
        }else {
          this.barControlShow=false
        }
      },

      //下拉是触发
      pullingUp(){
        console.log("上拉加载更多")
          this.tuPianItem(this.currentProducts)
          this.$refs.scroll.finish()
        },

      //防抖动   使refresh函数不用执行30次  就是将每张图片分配一些时间  当加载完后便取消时间 重新给另一张图片分配时间
      debounce(fun,delay){
        let timer=null
        return function (...args) {
          if(timer){
            clearTimeout(timer)
          }
          timer=setTimeout(()=>{
            fun.apply(this,args)
          },delay)
        }
      },

    },
    components:{
      lunbo,
      category,
      recommend,
      barControl,
      productItem,
      Scroll,
      backTop,
      contenttop
    },

  }
</script>

<style scoped>  /*有scoped这个属性 代表作用域  是指在改组件设置的样式只有作用在当前组件  即使在别的组件中有其他相同的calss或id 也不起作用*/
  .productItem{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
.wrapper{
  position: absolute;
  left: 0;
  top:44px;
  bottom: 100px;
  right: 0;
  overflow: hidden;
}
</style>
