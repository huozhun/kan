<template>
  <div class="login">
    <div class="con">
      <h2>登录</h2>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="user.username"/>
      </div>
      <div>
        <input type="text" placeholder="请输入密码" v-model="user.password"/>
      </div>
      <div><button @click="login">登录</button></div>
    </div>
  </div>
</template>
<script>
import {reqUserLogin} from '../../util/request'
import {mapActions,mapGetters}  from 'vuex'
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      requestUserLogin: "user/requestUserLogin",
    }),
    // 登录
    login() {
      reqUserLogin(this.user).then((res) => {
        console.log(res.data.list);
        this.requestUserLogin(res.data.list);
        this.$router.push('/index');
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553443, #303D60);
}
.con {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 460px;
  height: 260px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}
.con h2 {
  margin: 25px;
}
.con input {
  margin-bottom: 20px;
  width: 65%;
  height: 30px;
  font-size: 14px;
  text-indent: 10px;
  border: #e1e3e9 solid 2px;
  color: #c1c4cc;
  border-radius: 5px;
}
.con button {
  width: 65%;
  background: #409EFF;
  height: 35px;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
}
</style>