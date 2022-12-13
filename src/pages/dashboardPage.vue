<template>
    <div>
        <nav-bar/>
        <div class="flex">
          <leftBar/>
          <router-view class="w-full p-2"/>
        </div>
      </div>
</template>

<script>
import navBar from '@/components/navBar'
import leftBar from '@/components/leftBar.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    navBar,
    leftBar,
    RouterView,
  }
}
</script>