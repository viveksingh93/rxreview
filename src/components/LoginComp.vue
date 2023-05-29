<template>
    <HeaderComp />
<!-- <img class="" alt="Vue logo" src="../assets/radix.jpg"> -->
<h1>Login </h1>
<div class="login">
    <div>
        <input type="text" v-model="emailId" placeholder="Enter Email" />
    </div>

    <div>
        <input type="password" v-model="password" placeholder="Enter Password" />
    </div>

    <button v-on:click="login">Login</button>
    <p>click here to <router-link to="/Sign-up"> Sign-up</router-link>
    </p>
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
            password: '',
            Role: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:5081/api/Users/UserLogin?EmailId=${this.emailId}&password=${this.password}&password=${this.Role}`);
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
</style>
