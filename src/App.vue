<template>
  <div>
      <router-view class="w-full"/>  
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    RouterView,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus{
  outline: none;
}

</style>
