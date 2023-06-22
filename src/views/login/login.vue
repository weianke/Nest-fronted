<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-4">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">用户名：</label>
          <input
            type="email"
            :class="['form-control', { 'is-invalid': loginInfo.usernameMsg }]"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="loginInfo.username"
          />
          <div id="validationServerUsernameFeedback" class="invalid-feedback">
            {{ loginInfo.usernameMsg }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码：</label>
          <input
            type="password"
            :class="['form-control', { 'is-invalid': loginInfo.passwordMsg }]"
            id="exampleInputPassword1"
            v-model="loginInfo.password"
          />
          <div id="validationServerUsernameFeedback" class="invalid-feedback">
            {{ loginInfo.passwordMsg }}
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 mb-2 text-light" @click="submitLogin">
            登录
          </button>
          <router-link to="/reg" class="border rounded w-100 text-decoration-none text-center">
            <button type="submit" class="btn">注册</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, computed } from 'vue';
// 获取全局绑定app 的插件
let { proxy }: any = getCurrentInstance();

const loginInfo = reactive({
  username: '',
  password: '',
  usernameMsg: computed(() => {
    if (
      loginInfo.username !== '' &&
      !/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(loginInfo.username)
    ) {
      return '请输入正确的邮箱地址';
    }
    return '';
  }),
  passwordMsg: computed(() => {
    if (loginInfo.password !== '' && loginInfo.password.length < 6) {
      return '密码的长度不能小于6位';
    }
    return '';
  })
});

// 提交表单
const submitLogin = async () => {
  console.log(loginInfo);
  try {
    const res = await proxy.$axios.post('/auth/login', loginInfo);
    console.log('res', res);

    if (res.code === 200) {
      // 请求成功拿回data
    }
  } catch (e) {}
};
</script>

<style scoped></style>
