<template>
    <HeaderComp />
<!-- <img class="" alt="Vue logo" src="../assets/radix.jpg"> -->

<div class="login">
    <h1>Login </h1>
    <div>
        <input type="text" v-model="emailId" placeholder="Enter Email" />
    </div>

    <div>
        <input type="password" v-model="password" placeholder="Enter Password" />
    </div>
<div>
    <div>
       click here to <router-link to="/Sign-up"> Sign-up</router-link>
       <button v-on:click="login" class="btn">Login</button>
    </div>
    
</div>
   
    
   
</div>
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
    name: 'LoginComp',
    components:{
        HeaderComp
    },
    data() {
        return {
            emailId: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`https://localhost:7005/api/Users/UserLogin?EmailId=${this.emailId}&password=${this.password}`);
            if (result.status == 200) {
                console.warn("check", result.data)
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({
                    name: 'Home'
                })
            }
            console.warn(result)

        },
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {

            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>

<style>
.img {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100px;
    z-index: -1;
}
.login{
    text-align: center;
}
.btn{
    margin: 15px;
}
</style>
