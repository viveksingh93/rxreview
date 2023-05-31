<template>
<div class="topnav">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/add-Review">Review</router-link> -->
    <router-link to="/contact-US">Contact US</router-link>
    <a v-on:click="logout" href="#" style=" width: 199px;" class="logout">Login / Logout</a>

</div>  
</template>

<script>
export default {
    name: 'HeaderComp',
    methods: {
        logout() {
            
            localStorage.clear();
            this.$router.push({name:"Login"})
        }
    }
}
</script>

<style>
.topnav {
    background-color: #049495;
    overflow: hidden;
}

.topnav a {
    float: left;
    color: white;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 2px;
}

.topnav a:hover {
    background-color: #ddd;
    color: #222;
}
.logout{
    float: right !important;
}
</style>
