<template>
  <div>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/request/axios';

export default defineComponent({
  async setup() {
    const res = await axios.get('/user');
    console.log('res', res);
    return {};
  }
});
</script>

<style scoped></style>
