<template>
<HeaderComp />
<!-- <img class="" alt="Vue logo" src="../assets/radix.jpg"> -->

<div class="register">
    <h1>Sign Up</h1>
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="mobile" placeholder="Enter Mobile No" />
    <input type="text" v-model="emailId" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <!-- <input type="password" v-model="password" placeholder="Enter Password" /> -->
<div>
    <div>
 click here to <router-link to="/Login">Login</router-link>
        <button v-on:click="signup" class="btn">Submit</button>
   
    

    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
    name: 'signUp',
    components: {
        HeaderComp
    },
    data() {
        return {
            name: '',
            emailId: '',
            password: '',
            mobile: ''
        }
    },
    methods: {
        async signup() {
            //  console.log("signup", this.name, this.emailId, this.password, this.mobile)
            let result = await axios.post("https://localhost:7005/api/Users", {
                name: this.name,
                emailId: this.emailId,
                mobile: this.mobile,
                password: this.password

            });
            console.log(result.data);
            if (result.status == 201) {
                alert("SignUp Done")
                localStorage.setItem('user-info', JSON.stringify(result.data))
                this.$router.push({
                    name: 'Home'
                })
            }
        }
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
.register {
    text-align: center;
}

.btn{
    margin: 15px;
}
</style>
