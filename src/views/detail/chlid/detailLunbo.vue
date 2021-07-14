<template>
  <div>
    <Swiper class="Lunbo">
      <swiper-item v-for="item in LunBo">
        <img :src="item">
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index"
  export default {
    name: "detailLunbo",
    props:{
      LunBo:{
        type:Array
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
   .Lunbo{
     height: 300px;
     overflow: hidden;
   }
</style>