<template>
  <div class="bottom-bar">
    <div class="check-content" @click="checkeAllClick">
      <check-button class="check-button" :is-checked="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkCount}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartCount", "cartPrice", "cartSelectAll"]),
    totalPrice() {
      // return "￥" +this.$store.state.cartList
      //     .filter(item => item.checked)
      //     .reduce((pre, item) => { return pre + item.realPrice * item.count }, 0)
      return this.cartPrice;
    },
    checkCount() {
      // return this.$store.state.cartList
      //     .filter(item => item.checked)
      //     .reduce((pre, item) => { return pre + item.count }, 0)
      return this.cartCount;
    },
    isSelectAll() {
      // if (this.cartLength === 0) return false;
      // return !(this.cartList.filter(item => !item.checked).length)
      // return !this.cartList.find(item => !item.checked);
      return this.cartSelectAll;
    }
  },
  methods: {
    checkeAllClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => (item.checked = false));
      }else {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }
      // this.$store.commit('checkeAllClick',this.$store.state.cartList)
    },
    calcClick(){
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买商品',2000)
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  background-color: #eee;
  top: 534.2px;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 40px;

  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  line-height: 18px;
  margin-right: 5px;
}
.price {
  flex: 1;
  text-align: center;
}
.calculate {
  width: 90px;
  background-color: #ff8198;
  color: #fff;
  text-align: center;
}
</style>