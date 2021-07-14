<template>
  <div>
    <category-top/>
    <Scroll class="vueScroll" ref="scroll">
      <div v-for="(item,index) in categoryList" class="lists" @click="listClick(index)" :class="{class1:index===listIndex}">
        <span>{{item.title}}</span>
      </div>
      <div class="right">
      <div v-for="item in categoryContent" class="Content">
        <div id="div">
          <a :href="item.link"><img :src="item.image"></a>
        <div>{{item.title}}</div>
        </div>
      </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import {category1,category2} from "network/category.js";
  import CategoryTop from "./child/categoryTop";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "vue2",
    data(){
      return{
        categoryList:[],
        categoryContent:[],
        listIndex:0,
      }
    },
    created() {
      category1().then(res=>{
        for (let item of res.data.data.category.list){
          this.categoryList.push(item)
        }
        setTimeout(()=>{
          this.getContent(this.categoryList[this.listIndex].maitKey)
          this.$refs.scroll.refresh()
          console.log(this.categoryContent)
        },100)
      })
    },
    methods:{
      getContent(value){
        let i=0
          category2(value).then(res=>{
            for (let item of res.data.data.list){
             this.categoryContent.splice(i,1,item)
              i++
            }
          })
      },

      listClick(index){
        this.listIndex=index
        this.getContent(this.categoryList[this.listIndex].maitKey)
      }
    },
    components:{
      Scroll,
      CategoryTop
    }
  }
</script>

<style scoped>
  .lists{
    width: 100px;
    background:#dddddd;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .vueScroll{
    position: absolute;
    top:44px;
    left: 0;
    right: 0;
    bottom: 100px;
    overflow: hidden;
  }
  .right{
    position: absolute;
    left: 100px;
    top:0;
  }
  .Content{
    width: 70px;
    height: 70px;
    float: left;
    margin-left: 20px;
    text-align: center;
    overflow: hidden;
  }
  .right img{
    width: 50px;
    height: 50px;
  }
  .class1{
    background: white;
  }
</style>
