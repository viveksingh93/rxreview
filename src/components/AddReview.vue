<template>
<HeaderComp />
<!-- <h1>Add Comment</h1> -->
<div class="Adr">
    <h1>Write a Review</h1>
    <div class="rating">
        <span v-for="star in stars" :key="star" class="star" :class="{ 'filled': star <= selectedStar }" @click="selectStar(star)">
            &#9733;
        </span>
        Anonymous <input type="checkbox" v-model="isAnonymous">
        <font-awesome-icon icon="phone" />
    </div>
    <form class="add">
        <input type="text" placeholder="Name" v-model="Name" name="name" />
        <textarea type="text" placeholder="Description" v-model="Description" name="Description"></textarea>
        <br>
        <!-- <button type="button" v-on:click="Cancel">Cancel</button> -->
        <button type="button" v-on:click="AddReview">Add Review</button>
    </form>
</div>
</template>
<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
    name: 'AddReview',
    components: {
        HeaderComp
    },
    data() {
        return {

            Name: '',
            Description: '',
            selectedStar: 0,
            totalStars: 5,
            stars: [1, 2, 3, 4, 5],
            isAnonymous: false,
            dateTime: ''
        }
    },
    methods: {
        async AddReview() {
            console.log(this.Name,this.Description,this.selectedStar,this.isAnonymous,this.dateTime)
            let index = 0;
            for (index; index < document.getElementsByClassName('rating')[0].children.length; index++) {
                if (!document.getElementsByClassName('rating')[0].children[index].classList.contains('filled'))
                    break;
            }
//   https://localhost:7005/api/reviewDescription
            //let result = await axios.post("http://localhost:5081/api/Resturent", {
            let result = await axios.post("https://localhost:7005/api/reviewDescription", {
                Name: this.Name,
                description: this.Description,
                selectedStar: this.selectedStar,
                isAnonymous: this.isAnonymous,
                //dateTime:this.dateTime,
                reviewRate: index
            });
            if (result.status == 201) {
                this.$router.push({
                    name: 'Home'
                });
            }
            console.log(result.data);
        },
        selectStar(star) {
            this.selectedStar = star;
        },
        created() {
            this.currentDate = new Date('2022-01-01').toLocaleDateString();
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {

            this.$router.push({
                name: 'Signup'
            })
        }
    }
}
</script>
<style>
.add button {

    height: 40px;
    background-color: #049495;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
    border-radius: 4px
}

.add textarea {
    margin: 15px;
    width: 372px;
    height: 120px;
    padding-left: 20px;
    border-radius: 4px
}

.add input {
    margin: auto;
    width: 370px;
    height: 25px;
    border-radius: 4px;
}

.Adr {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #0f7be7;
}

.rating {
    color: #201f1e;
    /* Default star color */
    cursor: pointer;
}

.star {
    font-size: 24px;
}

.filled {
    color: #ff9900;
    /* Filled star color */
}
</style>

