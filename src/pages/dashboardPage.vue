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
  beforeCreate(){
      if(!document.cookie.split("token=")[1]){
        this.$router.push('/login')
      }
  },
  components: {
    navBar,
    leftBar,
    RouterView,
  }
}
</script>