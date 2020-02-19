<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar  @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
// import BackTop from "components/content/backTop/BackTop";
// import Toast from 'components/common/toast/Toast';

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
import { debounce } from "utils/debounce";
import { itemListenerMixin, backTopMixin } from "utils/mixin";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    // BackTop,
    // Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      // itemImgListener: null
      themeTopY: [],
      currentIndex: 0,
      isShowBackTop: false,
      // message:'',
      // show:false
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的轮播图片数据
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 4.获取商品详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      // this.$nextTick(() => {
      //   // 对应的DOM已经被渲染出来 但是图片依然事没有加载完(目前获取到的offsetTop不包含图片高度)
      //   this.themeTopY = [];
      //   this.themeTopY.push(0)
      //   this.themeTopY.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopY)
      // })
    });

    // 3.获取推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
      // console.log(this.recommends);
    });
  },
  mounted() {
    // 混入
  },
  updated() {},
  destroyed() {
    // 2.取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();

      // 获取哦主题的offsetTop
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopY);
    },
    titleClick(i) {
      // console.log(i);
      this.$refs.scroll.scrollTo(0, -this.themeTopY[i], 200);
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;

      // 2.positionY和主体offsetTop对比
      for (let i = 0; i < this.themeTopY.length; i++) {
        // console.log(i);
        if (
          (this.currentIndex !== i &&
            i < this.themeTopY.length - 1 &&
            positionY > this.themeTopY[i] &&
            positionY < this.themeTopY[i + 1]) ||
          (i === this.themeTopY.length - 1 && positionY > this.themeTopY[i])
        ) {
          // console.log(i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 3.是否显示顶部
      // this.isShowBackTop = -position.y > 1000;
      this.listenShowBackTop(position);
    },
    // backClick() {
    //   // console.log('111');
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
    addToCart() {
      // 1.获取购物车需要展示的商品信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.iid = this.iid;

      //2.将商品添加到购物车 (1.返回Promise 2.mapActions)
      // this.$store.cartList.push()
      // this.$store.commit('addCart',product)
      this.addCart(product).then(res => {
        // console.log(res)
        // this.message = res
        // this.show = true
        // setTimeout(()=>{
        //   this.message = ''
        //   this.show = false
        // },1500)

        // 自己封装的toast
        this.$toast.show(res)

        // element ui插件 通知栏
        // this.$message({message:res,offset:300,type: 'success',center: true,duration:2000});
      });

      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>