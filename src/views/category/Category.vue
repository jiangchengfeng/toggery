<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <!-- <tab-content :categoryData="categoryData" :count="count"></tab-content> -->
      <Scroll id="tab-content" ref="scroll">
        <tab-content-category :subcategories="showSubcategory"></tab-content-category>
        <tab-control :titles="['综合', '新品', '销量']"></tab-control>
        <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
      </Scroll>
    </div>
  </div>
</template>
  
<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./TabMenu";
import Scroll from "../../components/common/scroll/Scroll";
import TabContentCategory from "./TabContentCategory";
import TabContentDetail from "./TabContentDetail";
import TabControl from "../../components/content/tabControl/TabControl";

import { debounce } from "utils/debounce";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      count: -1,
      currentType: "pop"
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.count === -1) return [];
      return this.categoryData[this.count].subcategories;
    },
    showCategoryDetail() {
      if (this.count === -1) return [];
      return this.categoryData[this.count].categoryDetail;
    }
  },
  methods: {
    async _getCategory() {
      const { data: res } = await getCategory();
      // 1.获取分类数据
      this.categories = res.category.list;
      // console.log(this.categories);

      // 2.初始化每个类别的子数据
      for (let i = 0; i < this.categories.length; i++) {
        this.categoryData[i] = {
          subcategories: [],
          // categoryDetail: {
          //   pop: [],
          //   new: [],
          //   sell: []
          // }
          categoryDetail: []
        };
      }
      // 3.请求第一个分类的数据
      this._getSubcategories(0);
    },
    _getSubcategories(index) {
      this.count = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data.list;
        this.categoryData = [...this.categoryData];
        this._getCategoryDetail("pop");
        // this._getCategoryDetail("sell");
        // this._getCategoryDetail("new");
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.count].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.count].categoryDetail = res;
        this.categoryData = [...this.categoryData];
        // console.log(this.categoryData[this.count].categoryDetail);
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    }
  },
  deactivated() {
    // 2.取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('我是混入中的内容');
  }
};
</script>
  
<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
}
.tab-content-detail {
  width: 100%;
}
</style>