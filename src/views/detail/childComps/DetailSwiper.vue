<template>
  <!-- <swiper>
      <swiper-item v-for="(item,i) in topImages" :key="i">
          <img :src="item" alt />
      </swiper-item>
  </swiper> -->
  <el-carousel trigger="click" height="300px">
    <el-carousel-item v-for="(item,i) in topImages" :key="i">
      <img :src="item" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components:{
        Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>

</style>