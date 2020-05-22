<template>
  <div id="user-info">
    <div class="avater">
      <img src="~assets/images/profile/avatar.png" />
    </div>
    <div class="login-info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/images/profile/phone.png" />暂无绑定手机号
      </div>
    </div>
    <div class="arrow">
      <i class="el-icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style scoped>
#user-info {
  display: flex;
  height: 85px;
  padding: 6px 15px;
  background-color: var(--color-tint);
  color: #fff;
}
.avater {
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: #eee;
}
.avater img {
  width: 100%;
}
.login-info {
  margin-left: 15px;
  vertical-align: middle;
}
.login-info .login {
  font-size: 18px;
  margin-top: 12px;
}
.login-info .phone {
  font-size: 14px;
  margin-top: 8px;
}
.phone img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  position: relative;
  bottom: 2px;
}

.arrow {
  position: absolute;
  right: 15px;
  margin-top: 15px;
  font-size: 30px;
}
</style>