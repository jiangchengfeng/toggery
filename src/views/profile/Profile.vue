<template>
  <div id="profile">
    <nav-bar>
      <template v-slot:center>我的信息</template>
    </nav-bar>
    <user-info />
    <my />
    <list-view :listData="orderList" />
    <list-view :listData="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./UserInfo";
import My from "./My";
import ListView from "./ListView";
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    My,
    ListView
  },
  data() {
    return {
      orderList: [
        { icon: require('../../assets/images/profile/message.png'), info: "我的消息" },
        { icon: require('../../assets/images/profile/pointer.png'), info: "积分商城" },
        { icon: require('../../assets/images/profile/vip.png'), info: "会员卡" }
      ],
      serviceList: [
        { icon: require('../../assets/images/profile/cart.png'), info: "我的购物车" },
        { icon: require('../../assets/images/profile/app.png'), info: "下载购物APP" }
      ]
    };
  }
};
</script>

<style scoped>
</style>