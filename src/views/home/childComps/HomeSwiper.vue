<template>
  <!-- 自己封装轮播图 -->
  <!-- <swiper>
      <swiper-item v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
  </swiper>-->

  <!-- element-ui轮播图插件 -->
  <el-carousel trigger="click" height="195.100px">
    <el-carousel-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isLoad:true
    }
  },
  methods: {
    imageLoad(){
      if(this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = false
      }
    }
  },
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
}
</style>