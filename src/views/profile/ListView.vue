<template>
  <div id="list-view">
    <div class="list-item" v-for="(item,index) in listData" :key="index">
      <img :src="item.icon" />
      <span class="info">{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#list-view {
  border-top: 18px solid #f8f8f8;
}

.list-item {
  height: 50px;
  line-height: 50px;
  background: #fff;
  font-size: 16px;
  margin-left: 15px;
  border-bottom: 2px solid #f8f8f8;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.list-item .info {
  vertical-align: middle;
  margin-left: 10px;
}
</style>