<template>
  <div class="detail" >
    <nav-child @nav-child="navChild" :scroll-index="scrollIndex1"></nav-child>
    <Scroll class="content1" ref="scroll" :probe-type="3" @move="move">
    <detail-lunbo :lun-bo="LunBO"></detail-lunbo>
    <detail-goods :Goods="Goods" :Shop="Shop"></detail-goods>
    <detail-shop :Shop="Shop"></detail-shop>
    <detail-tu :detail-info="detailInfo" @img-load="imgLoad"></detail-tu>
    <detail-can-shu :can-shu="canShu" ref="detailCanShu"></detail-can-shu>
    <detail-ping-lun :rate="rate" ref="detailPingLun"></detail-ping-lun>
    <detail-recommend :items="recommend" ref="detailRecommend"></detail-recommend>
    </Scroll>
    <detail-bottom @cart-click="cartClick"></detail-bottom>
    <detail-topback @click.native="topBack"></detail-topback>
  </div>
</template>

<script>
  import navChild from "./chlid/navChild";
  import detailLunbo from "./chlid/detailLunbo";
  import detailGoods from "./chlid/detailGoods";
  import detailShop from "./chlid/detailShop";
  import Scroll from "components/common/scroll/Scroll"
  import detailTu from "./chlid/detailTu";
  import detailCanShu from "./chlid/detailCanShu";
  import detailPingLun from "./chlid/detailPingLun";
  import detailRecommend from "./chlid/detailRecommend";
  import detailBottom from "./chlid/detailBottom";
  import detailTopback from "./chlid/detailTopback";


  import {detail,Goods,Shop} from "../../network/detail";
  import {fun2} from "network/main.js"
  import DetailTu from "./chlid/detailTu";

  export default {
    name: "detail",
    created(){
     this.getId()
    },
    data(){
      return{
        iid:null,
        LunBO:[],
        Goods:{},
        Shop:{},
        detailInfo:{},
        canShu:{},
        rate:{},
        scrollCanShu:null,
        scrollPingLun:null,
        scrollRecommend:null,
        refresh1:Object,
        scrollIndex1:0,
        recommend: [],
        skuInfo:null
      }
    },
    components:{
      DetailTu,
     detailLunbo,
      navChild,
      detailGoods,
      detailShop,
      Scroll,
      detailTu,
      detailCanShu,
      detailPingLun,
      detailRecommend,
      detailBottom,
      detailTopback
    },
    watch:{  //使得推荐中的商品路由会跳转
      $route(n,o){
        if(n.path!==o.path){
          this.iid=this.$route.query.iid
          this.$refs.scroll.scrollTo(0,0,0)
          this.getId()
        }
      }
    },
    mounted() {
      this.refresh1=this.debounce(this.$refs.scroll.refresh,200)
    },
    methods:{
      getId(){
        this.iid=this.$route.params.iid
        detail(this.iid).then(res=>{
          //获取轮播数据
          this.LunBO=res.data.result.itemInfo.topImages
          console.log(res)
          //商品和店铺数据
          this.Goods=new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
          this.Shop=new Shop(res.data.result.shopInfo)
          //获取detail图片数据
          this.detailInfo=res.data.result.detailInfo
          //获取参数信息数据
          this.canShu=res.data.result.itemParams
          //获取评论数据
          if(res.data.result.rate.cRate!=0) {
            this.rate = res.data.result.rate
          }
          this.skuInfo=res.data.result.skuInfo
        })
        fun2("sell",1).then(res=>{
          for(let i=0;i<=6;i++){
            this.recommend.push(res.data.data.list[i])
          }
        })
      },
      imgLoad(){
        this.refresh1()
        if(this.$refs.detailCanShu && this.$refs.detailPingLun && this.$refs.detailRecommend) {
          this.scrollCanShu = this.$refs.detailCanShu.$el.offsetTop
          this.scrollPingLun = this.$refs.detailPingLun.$el.offsetTop
          this.scrollRecommend = this.$refs.detailRecommend.$el.offsetTop
        }
      },
      move(position){
        if(-position.y >= this.scrollCanShu){
          this.scrollIndex1 = 1
        }
        if(-position.y >= this.scrollPingLun){
          this.scrollIndex1 = 2
        }
        if(-position.y >= this.scrollRecommend){
          this.scrollIndex1 = 3
        }
      },
      navChild(index){
        switch (index) {
          case 0:
          this.$refs.scroll.scrollTo(0,0,100)
            break
          case 1:
            this.$refs.scroll.scrollTo(0,-this.scrollCanShu,0)
            break
          case 2:
            this.$refs.scroll.scrollTo(0,-this.scrollPingLun,0)
            break
          case 3:
            this.$refs.scroll.scrollTo(0,-this.scrollRecommend,0)
            break
        }
      },
      debounce(fun,delay){
        let timer=null
       return function () {
         if(timer){clearTimeout(timer)}
         timer=setTimeout(()=>{
           fun.apply=(this)
         },delay)
       }
       },
       /* let timer=null
        return function (...args) {
          if(timer){
            clearTimeout(timer)
          }
          timer=setTimeout(()=>{
            fun.apply(this,args)
          },delay)
        }
      },*/
      topBack(){
        this.$refs.scroll.scrollTo(0,0,0)
      },
      cartClick(){
        let product={}
        product.iid=this.iid
        product.title=this.skuInfo.title
        product.price=this.skuInfo.defaultPrice
        product.img=this.LunBO[0]
        product.counter=0
        this.$store.commit("getCart",product)
      }
    },
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 999;
    background: white;
    height: 100vh;
  }
  .content1{
    position: absolute;
    top:44px;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    overflow: hidden;
  }
</style>