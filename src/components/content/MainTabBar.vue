<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home" activeColor="deeppink">
      <template v-slot:item-icon>
        <i class="el-icon-house"></i>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <template v-slot:item-icon>
        <i class="el-icon-s-grid"></i>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
      <template v-slot:item-icon>
        <i class="el-icon-shopping-cart-2"></i>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <template v-slot:item-icon>
        <i class="el-icon-user"></i>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
};
</script>

<style>
.tab-bar{
  z-index: 9
}
</style>