<template>
<div>
    <HeaderComp />
    <div class="rar ">
        <slot>
            <h2>
                Ratings and reviews <router-link :to="'/add-Review/'" class="Update fa fa-arrow-right">
                    <font-awesome-icon icon="phone" />
                    <img class="image" alt="Vue logo" src="../assets/Arrow.png">
                </router-link>
            </h2>
        </slot>
        <div v-for="item in reviews" :key="item.id" class="EGFGHd">
            <table>
                <div class="bp9Aid">
                    <span v-if="!item.isAnonymous ">
                        Name: {{ item.name }}
                    </span>

                    <div class="rating">
                        <div>
                        <span v-for="star in stars" :key="star" class="starh" :class="{ 'filled': star <= item.reviewRate }">
                            &#9733;
                        </span>
                        {{ format_date(item.dateTime) }}
                    </div>
                        
                    </div>

                    <!-- Rating: {{ item.reviewRate }} -->
                    <!-- {{ format_date(item.dateTime) }} -->

                </div>
            </table>
            <div class="h3YV2d">
                <!--  style="text-align: justify; width: 1200px;" -->
                {{ item.description }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import moment from 'moment'
import axois from 'axios';

export default {
    name: 'HomeComp',
    data() {
        return {
            name: '',
            reviews: [],
            selectedRating: 0,
            dateTime: '',
            reviewRate: '',
            description: '',
            currentDate: null,

            selectedStar: 0,
            totalStars: 5,
            stars: [1, 2, 3, 4, 5],
        }
    },
    components: {
        HeaderComp
    },
    methods: {
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if (!user) {

                this.$router.push({
                    name: 'Signup'
                })
            }
            let result = await axois.get('http://localhost:5081/api/Resturent')
            console.log(result.data)
            console.log(this.reviewRate)
            this.reviews = result.data
        },

        format_date(dateTime) {
            if (dateTime) {
                return moment(String(dateTime)).format('DD MMMM , YYYY')
            }
        },

        getCurrentDate() {
            setInterval(() => {
                this.currentDate = this.dateTime;
            }, 1000); // Update the date every second (adjust as needed)
        }

    },
    mounted() {
        this.loadData();
        //this.date = this.printDate();
        this.getCurrentDate()
        // if (result.status == 201) {

        //     localStorage.setItem('user-info', JSON.stringify(result.data))
        //     this.$router.push({
        //         name: 'Home'
        //     })
        // }
    }
};
</script>

<style>
.EGFGHd {
    /* padding: 24px 0; */
    
    padding: 20px;
}

.CiSZSd {
    display: inherit;
    margin-left: auto;
}

.container {
    border: 1px solid #ccc;
    padding: 20px;
}

.rcorners2 {
    border-radius: 25px;
    border: 2px solid #ffffff;
    padding: 20px;
    width: 200px;
    height: 150px;
}

.bg-color {
    background: antiquewhite !important;
    ;
}

td {
    width: 300px;
    background-color: rgb(254, 254, 254);
    text-align: initial;
    height: 40px;

}

table {
    /* margin: auto; */
    text-align: justify;
    padding: 12px;

    border-radius: 25px;
    /* border: 2px solid #ffffff; */
    padding: 0px;

    height: 20px;
    margin: 0px;
}

.tes {
    padding: 16px 14px
}

.homebtn {
    /* width: 100px;
    height: 40px; */
    background-color: #a70c1e;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
}

.Update {
    background-color: #fff;
    ;
    color: #090101;
    /* border: 1px solid skyblue; */
    cursor: pointer;
}

.image {
    height: 16px;
    margin-left: 6px;
}

.rating {
    color: #201f1e;
    /* Default star color */
    /* cursor: pointer; */
}

.starh {
    font-size: 15px !important;
}

.filled {
    color: #ff9900;
    /* Filled star color */
}

.bp9Aid {
    color: rgb(95, 99, 104);
    fill: rgb(95, 99, 104);
    stop-color: rgb(95, 99, 104);
    font-family: Roboto, Arial, sans-serif;
    font-size: .75rem;
    font-weight: 400;
    letter-spacing: .025em;
    line-height: 1rem;
    margin-left: 1ch;
}

.h3YV2d {
    margin-top: 8px;
    font-size: .875rem;
    letter-spacing: .0142857143em;
    line-height: 1.25rem;
    overflow-wrap: anywhere;
    text-align: start !important;
    color: dimgray !important;
    width: 1200px;

}

.rar{

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #0f7be7;
	
}
</style>
