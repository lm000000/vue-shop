<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="luboLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index.js"
  export default {
    name: "lunbo",
    props:{
     banners:{
       type:Array
     }
    },
    data(){
      return{
        load:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      luboLoad() {
        if (!this.load) {
        this.$emit("luboLoad")
          this.load=true
      }
      }
    }
  }
</script>

<style scoped>

</style>