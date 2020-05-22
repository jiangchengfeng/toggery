<template>
  <div id="my">
    <div class="my-money">
      <div>
        <span class="num">00.0</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="my-discounts">
      <div>
        <span class="num">0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="my-integral">
      <div>
        <span class="num">0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My"
};
</script>

<style scoped>
#my {
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
    background: #f8f8f8;
}
.my-money,
.my-discounts,
.my-integral {
  width: 33%;
  background: #fff;
  padding: 25px 0;
}
.num {
  color: #ff5f3e;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
}
</style>