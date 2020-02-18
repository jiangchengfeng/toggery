import { debounce } from "utils/debounce";

import BackTop from 'components/content/backTop/BackTop';
// 混入:两个组件之间想复用代码
export const itemListenerMixin = {
  data() {
    return { itemImgListener: null }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('我是混入中的内容');
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods: {
    listenShowBackTop(position){
      this.isShowBackTop = -position.y > 1000;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
}