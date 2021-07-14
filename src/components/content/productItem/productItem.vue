<template>
  <div>
    <div v-for="item in items" class="productItem" @click="imgClick(item)">
      <!--@load 事件 是vue中封装的加载事件-->
    <img v-lazy="item.show.img" class="image" @load="imageLoad">
      <span class="tittle">{{item.title}}</span>
      <br>
      价格<span class="price">{{item.price}}</span>
      收藏<span class="cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productItem",
    props:{
      items:{
        type:Array
      }
    },
    methods:{
      imageLoad(){
        // $bus 是指事件总线 但是要在main文件中用原型链添加是其成为一个vue实例  向事件总线发送一个事件  再在要调用的组件中引用   this.$bus.$on(事件,()=>{})
        this.$bus.$emit("imageLoad")
      },
      imgClick(item){
        this.$router.push("/detail/"+item.iid)
      }
    }
  }
</script>

<style scoped>
   .image{
     display: inline-block;
     width: 100%;
   }
  .productItem{
    width: 48%;
    overflow: hidden;
    text-align: center;
  }
  .tittle{
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>