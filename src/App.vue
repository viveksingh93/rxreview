<template>
<!--   
  <signUp />
  <HomeComp/> -->

  <router-view>
    

  </router-view>
  <Teleport to="#footer">

    <!-- <FooterComp /> -->
</Teleport>
</template>

<script>
// import FooterComp from './components/FooterComp.vue'
export default {
  name: 'App',
  components:{
   // FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515a62;
  /* margin-top: 60px; */
  
}
.logo {
    width: 150px;
}
body{
  padding: 0px;
  margin: 0px;
}
.register input, .login input, .add input{
    width: 300px;
    height: 25px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 4px;
}

.register button, .login button {
    width: 90px;
    height: 40px;
    background-color: rgb(52, 185, 76);
    color: white;
    border: 1px solid rgb(150, 237, 103);
    cursor: pointer;
    border-radius: 8px;
}
</style>
