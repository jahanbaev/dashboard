<template>
  <div>  
    <nav class="z-10 fixed box-border  h-14 bg-zinc-800  w-full">
        <ul class=" max-w-7xl flex  box-border pl-2 pr-2  text-lg h-full w-full m-auto text-white absolute bg-zinc-800 flex-col lg:flex-row lg:bg-transparent lg:relative lg:justify-end lg:items-center">
            <div class="mr-auto mt-3 lg:mt-0">Admin</div>
            <div class="links top-16 lg:top-0 flex flex-col lg:flex-row">
                <li class="pb-3 pt-3 w-full text-center m-0 lg:m-3 lg:w-min lg:text-start"><router-link class="hover:opacity-50" to="/">Home</router-link></li>
                <li class="pb-3 pt-3 w-full text-center m-0 lg:m-3 lg:w-min lg:text-start"><router-link class="hover:opacity-50" to="/about">About</router-link></li>
                <li class="pb-3 pt-3 w-full text-center m-0 lg:m-3 lg:w-min lg:text-start"><router-link class="hover:opacity-50" to="/about">Users</router-link></li>
            </div>
        </ul>
    </nav>
    <div class="h-14 w-full"></div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  }
}

</script>