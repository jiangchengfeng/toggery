<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <div class="content">
      <div class="left">左</div>
      <div class="right">右</div>
    </div>
  </div>
</template>
  
<script>
import NavBar from "components/common/navbar/NavBar";

import { getCategory } from "network/category";
export default {
  name: "Category",
  components: {
    NavBar
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    async _getCategory() {
      const { data: res } = await getCategory();
      // 1.获取分类数据
      this.categories = res.category.list;
      console.log(this.categories);
      
    }
  }
};
</script>
  
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  display: flex;
}
.left {
  width: 100px;
  text-align: center;
  background-color: #eee;
}
</style>