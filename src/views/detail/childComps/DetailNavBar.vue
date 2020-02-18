<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <i class="el-icon-arrow-left"></i>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            class="title-item"
            v-for="(item,i) in titles"
            :key="i"
            :class="{active:i===currentIndex}"
            @click="titleClick(i)"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(i) {
      this.currentIndex = i
      this.$emit('titleClick',i)
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back .el-icon-arrow-left {
  margin-top: 10px;
  font-size: 25px;
}
</style>