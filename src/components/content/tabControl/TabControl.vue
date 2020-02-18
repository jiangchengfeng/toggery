<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,i) in titles" :key="i"
         :class="{active:i === currentIndex}"
         @click="itemClick(i)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(i){
      this.currentIndex = i,
      this.$emit('tabClick',i)
    }
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 8;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom:3px solid var(--color-tint)
}
</style>