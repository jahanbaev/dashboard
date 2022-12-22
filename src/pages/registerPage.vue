<template>
    <div class="w-full h-screen flex justify-center items-center">
        <form action="" @submit.prevent="send" class="flex justify-center items-center w-full h-screen flex-col">
            <div class="flex w-80">
                <input class="bg-slate-300 rounded-md p-2 w-1/2 mr-3" type="text" ref="userName" placeholder="username"  v-model="userName" >
                <input class="bg-slate-300 rounded-md p-2 w-1/2" type="text" v-model="userLastName" ref="lastName" placeholder="last name">
            </div><br/>
            <input class="bg-slate-300 rounded-md p-2 w-80" type="text" v-model="companyName" ref="companyName" placeholder="company name"><br/>
            <input class="bg-slate-300 rounded-md p-2 w-80" type="text" v-model="phone" ref="phone" placeholder="phone (e.x 998935491843)"><br/>
            <input class="bg-slate-300 rounded-md p-2 w-80" type="password" v-model="password" ref="password" placeholder="password"><br/>
            <input class="bg-slate-300 rounded-md p-2 w-80" type="password" v-model="rePassword"  ref="" placeholder="repeat password"><br/>
            <button type="submit" class="bg-neutral-900  p-3 w-72 text-white rounded-md text-base ">Create account</button><br>
            <RouterLink to="login" class="underline  decoration-1">I have account</RouterLink>
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
            userName: '',
            userLastName: '',
            companyName: '',
            phone: '',
            password:'',
            rePassword: ''
        }
    },
    components:{
        RouterLink
    },
    validations() {
        return {
            userName: { required,},
            userLastName: { required,},
            companyName: { required,},
            phone: { required },
            password: {required}
        }
    },
    methods:{
        send(){
            this.v$.$validate()
            if (!this.v$.$error) {
            let list = {
                userName: this.$refs.userName.value,
                userLastName: this.$refs.lastName.value,
                companyName : this.$refs.companyName.value,
                phone: this.$refs.phone.value,
                password: this.$refs.password.value 
            }

                auth.register(list).then((a) => {
                    if(a.data.status == "success"){
                        const d = new Date();
                        d.setTime(d.getTime() + (30*24*60*60*1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = "token=" + a.data.token + ";" + expires + ";path=/";
                        this.$router.push('/dashboard')
                    }
                })
            }else{
                alert("error")
            }
        }
    }
}
</script>