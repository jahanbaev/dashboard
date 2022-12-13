<template>
    <div class="w-full h-screen flex justify-center items-center">
        <button @click="send">send</button>
        <form action="">

        </form>
    </div>
</template>

<script>
import auth from '@/services/auth';
export default {
    data() {
        return {
            val: '',
        }
    },
    methods:{
        send(){
            auth.register({
                userName: "samandar",
                userLastName: "jahanabaev",
                companyName : "uztec",
                phone: "+998935491843",
                password: "1291834" 
            }).then((a) => {
                this.val = a 
          })
            
        }
    }
}
</script>