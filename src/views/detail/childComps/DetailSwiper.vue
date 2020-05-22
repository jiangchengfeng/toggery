<template>
  <!-- <swiper>
      <swiper-item v-for="(item,i) in topImages" :key="i">
          <img :src="item" alt />
      </swiper-item>
  </swiper>-->
  <!-- <el-carousel trigger="click" height="300px">
    <el-carousel-item v-for="(item,i) in topImages" :key="i">
      <img :src="item" alt />
    </el-carousel-item>
  </el-carousel> -->

  <van-swipe class="detailSwiper" :autoplay="2000">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
// import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    //     Swiper,
    // SwiperItem
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

<style scoped>
/* .van-swipe {
  height: 300px;
} */
.detailSwiper {
  height: 400px;
}
.van-swipe-item img {
  width: 100%;
}
</style>