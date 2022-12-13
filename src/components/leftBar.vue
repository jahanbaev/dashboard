<template>
    <div>
    <div class="left-bar"></div>
    <div class="left-bar pt-16 fixed top-0 z-0 bg-[#1C1C1C] text-white p-2">
        <div class="projects h-10 w-full flex justify-center items-center border-b border-solid border-[#2b2b2b] pb-2 mb-2">
            <h2 class="w-full h-6 text-xl">{{(selectedProject === 0)?'Projects':selectedProject}}</h2>
            <img v-if="selectedProject === 0" class="w-7 cursor-pointer" src="@/assets/icons/Add.svg" alt="">
            <img v-else class="w-7 cursor-pointer" src="@/assets/icons/Close.svg" @click="selectedProject = 0">
        </div>
        <div v-if="selectedProject === 0" class="projects-list">
            <div class="projects cursor-pointer h-10 w-full flex justify-center items-center border-b border-solid border-[#2b2b2b] pb-1" @click="setProject('project 1')">
                <img class="w-5 mr-3 cursor-pointer" src="@/assets/icons/ShieldCheck.svg" alt=""/>
                <h2 class="w-full h-6">Project name</h2>
                <img class="w-5 mr-3 cursor-pointer" src="@/assets/icons/ArrowLineRight.svg"/>
            </div>
            <div class="projects cursor-pointer h-10 w-full flex justify-center items-center border-b border-solid border-[#2b2b2b] pb-1" @click="setProject('project 2')">
                <img class="w-5 mr-3 cursor-pointer" src="@/assets/icons/Clock.svg" alt=""/>
                <h2 class="w-full h-6">Project second</h2>
                <img class="w-5 mr-3 cursor-pointer" src="@/assets/icons/ArrowLineRight.svg">
            </div>
        </div>
        <div v-else>
            
        </div>
    </div>
    </div>
</template>
<script>

   export default {
    data() {
        return {
            selectedProject: 0,
        }
    },
    methods:{
        setProject(name){
            this.selectedProject = name
            this.$router.push({ path: '/dashboard/' + name })
        }
    },
    watch:{
        selectedProject(newVal){
           if (newVal == 0) this.$router.push({ path: '/dashboard/'})
        }
    }
   }
</script>
<style scoped>
.left-bar{
    width: 17rem;
    height: 100vh;
}
</style>