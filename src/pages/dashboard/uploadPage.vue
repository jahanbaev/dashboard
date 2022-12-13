<template>
    <div style="w-full">
      <DropZone 
        method="POST"
        @sending="uploaded"
        :maxFiles="Number(90000000000)"
        url="//localhost:9090/fileupload"
        :uploadOnDrop="true"
        :multipleUpload="false"
        :parallelUpload="10"/>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { DropZone } from 'dropzone-vue';
  
  export default defineComponent({
    components: {
      DropZone,
    },
    name: 'App',
    setup() {
      return {
      };
    },
    methods:{
        uploaded(){
            console.log("uploaded")
        }
    }
  });
  </script>

  <style scoped>
  .dropzone--has-thumbnail > .dropzone__item-thumbnail > img {
    display: block;
    width: var(--preview-size);
    height: var(--preview-size);
    object-fit: cover;
  }
</style>