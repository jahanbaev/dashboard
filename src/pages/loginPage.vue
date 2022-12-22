<template>
    <div class="w-full h-screen flex justify-center items-center">
        
          
        <form action="" @submit.prevent="send" class="flex justify-center items-center w-full h-screen flex-col">          
            <input class="bg-slate-300 rounded-md p-2 w-80" type="text" name="login" ref="login" placeholder="username" v-model="email" ><br/>
            <input class="bg-slate-300 rounded-md p-2 w-80" type="password" name="password" ref="password" placeholder="password" v-model="password"><br/>
            <button type="submit" class="bg-neutral-900  p-3 w-72 text-white rounded-md text-base ">login</button><br/>
            <RouterLink to="signup" class="underline  decoration-1">create account</RouterLink>
        </form>
    </div>
</template>

<script>

import auth from '@/services/auth';
import { RouterLink } from 'vue-router';
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
   
    data() {
        return {
            v$: useValidate(),
            email: '',
            password: ''
        }
    },
    validations() {
        return {
            email: { required, },
            password: { required , }
        }
    },
    components:{
        RouterLink
    },
    methods:{
        send(){
            let list = {
                userName: this.$refs.login.value,
                password: this.$refs.password.value 
            }

            this.v$.$validate()
            if (!this.v$.$error) {
                auth.login(list).then((a) => {
                    if(a.data.status == "success"){
                        const d = new Date();
                        d.setTime(d.getTime() + (30*24*60*60*1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = "token=" + a.data.token + ";" + expires + ";path=/";
                        this.$router.push('/dashboard')
                    }
                })
            } else {
                alert('Form failed validation')
            }
            
        }
    }
}
</script>