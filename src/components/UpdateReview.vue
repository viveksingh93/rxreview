<template>
<HeaderComp />
<h1>Update Comment</h1>

<form class="add">
    <input type="textarea" placeholder="Enter Name" v-model="Review.name" name="name" />
   
    <button type="button" v-on:click="UpdateReview"> Update Review</button>
</form>
</template>

<style>
</style>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
export default {
    name: 'UpdateReview',
    components: {
        HeaderComp
    },
    data() {
        return {
            Review: {
                id:'',
                Name: '',
                address: '',
                contactNo: ''
            }
        }
    },
    methods: {
        async UpdateReview() {
            let result = await axios.put(
                `http://localhost:5081/api/Resturent?id=${this.$route.params.id}`, {
                Name:this.Review.name,
                address:this.Review.address,
                contactNo:this.Review.contactNo,
                id:this.$route.params.id
            });
            console.log(result.data)
            if (result.status == 200) {
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {

            this.$router.push({
                name: 'Signup'
            })
        }
        const result = await axios.get('http://localhost:5081/api/Resturent/' + this.$route.params.id)
        this.Review = result.data
    }
}
</script>
