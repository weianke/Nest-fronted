<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-4">
      <form class="border shadow-sm rounded p-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">用户名：</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码：</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="d-flex flex-column align-items-center px-1">
          <button type="submit" class="btn btn-primary w-100 mb-2 text-light">登录</button>
          <router-link to="/reg">
            <button type="submit" class="btn rounded w-100">注册</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
// 获取全局绑定proxy
let { proxy }: any = getCurrentInstance();

const getUser = async () => {
  const res = await proxy.$axios.get('/user');
  console.log('res', res);
};

onMounted(() => {
  getUser();
});
</script>

<style scoped></style>
