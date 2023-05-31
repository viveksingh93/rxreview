<template>
<div>
    <HeaderComp />
    <div>
        <AddReview :visible="showModal" @close="closeModal">

        </AddReview>

    </div>
    <div class="rar ">

        <slot>
            <h2>
                Ratings and reviews
                <!-- <router-link :to="'/add-Review/'" class="Update fa fa-arrow-right">
                    <font-awesome-icon icon="phone" />
                    <img class="image" alt="Vue logo" src="../assets/Arrow.png">
                </router-link> -->

                <button @click="openModal" class="rbtn">
                    <img class="image" alt="Vue logo" src="../assets/Arrow.png"></button>
            </h2>

        </slot>

        <!-- <div class="P4w39d">

        </div> -->
        <h2 class="jILTFe">
            <div class="P4w39d">
                {{ avg }}
                <span v-for="star in stars" :key="star" class="starh" :class="{ 'filled': star <= avg }">
                    &#9733;
                </span>

            </div>

            <div class="">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

        </h2>

        <div v-for="item in reviews" :key="item.id" class="EGFGHd">

            <table>
                <div class="bp9Aid">
                    <span v-if="!item.isAnonymous ">
                        {{ item.name }}
                    </span>

                    <div class="rating">
                        <div>
                            <span v-for="star in stars" :key="star" class="starh" :class="{ 'filled': star <= item.reviewRate }">
                                &#9733;
                            </span>
                            {{ format_date(item.dateTime) }}
                        </div>
                    </div>
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
import axois from 'axios'
import AddReview from './AddReview.vue'

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
            showModal: false,
            avg: 0
        }
    },
    components: {
        HeaderComp,
        AddReview
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
            let result = await axois.get('https://localhost:7005/api/reviewDescription')
            console.log(result.data)
            console.log(this.reviewRate)
            this.reviews = result.data
            let total = 0;
            for (let index = 0; index < this.reviews.length; index++) {
                total += this.reviews[index].reviewRate;

            }
            this.avg = total / this.reviews.length;
        },

        format_date(dateTime) {
            if (dateTime) {
                return moment(String(dateTime)).format('DD MMMM YYYY')
            }
        },

        getCurrentDate() {
            setInterval(() => {
                this.currentDate = this.dateTime;
            }, 1000); // Update the date every second (adjust as needed)
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },

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

.P4w39d {

    display: flow-root;
    padding-top: 0px;
    width: 250px;
    color: black !important;

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

.rar {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #0f7be7;

}

.jILTFe {

    fill: rgb(32, 33, 36);
    stop-color: rgb(32, 33, 36);
    font-family: "Google Sans Display", Roboto, Arial, sans-serif;
    line-height: 4rem;
    font-size: 3.5rem;
    letter-spacing: 0;
    font-weight: 400;

}

.rbtn {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  overflow: visible;
}
</style>
