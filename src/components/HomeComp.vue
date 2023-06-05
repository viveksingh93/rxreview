<template>
<div class="main">
    <HeaderComp />

    <div class="maind wkMJlb YWi3ub">
        <div class="nRgZne">
            <div>
                <AddReview :visible="showModal" @close="closeModal">
                </AddReview>
            </div>
            <div class="qZmL0">
                <slot>
                    <h2>
                        New Ratings and reviews
                        <button @click="openModal" class="rbtn">
                            <img class="image" alt="Vue logo" src="../assets/Arrow.png"></button>
                    </h2>
                </slot>
                <h2 class="jILTFe">
                    <table>
                        <tr>
                            <td>
                                <div class="P4w39d">
                                    {{ avg.toFixed(1) }}
                                    <span v-for="star in stars" :key="star" class="starh" :class="{ 'filled': star <= avg }">
                                        &#9733;
                                    </span>
                                </div>
                            </td>
                            <td class="dateTag">
                                <input type="date" class="dateinput" placeholder="choose date" v-model="searchDate" />
                            </td>
                            <td class="searchTag">
                                <button class="srchBtn" @click="searchData">Searech</button>
                            </td>
                        </tr>
                    </table>
                </h2>
                <div v-for="item in filteredData" :key="item.id" class="EGFGHd">
                    <table class="gSGphe">
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
                        {{ item.description }}
                    </div>
                </div>
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

import '@vuepic/vue-datepicker/dist/main.css'
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
            avg: 0,
            searchDate: '',
            filteredData: []
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
            this.filteredData = result.data
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
            }, 1000);
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        searchData() {
            if (this.searchDate == null || this.searchDate == "" || this.searchDate == undefined) {
                this.filteredData = this.reviews;
                return;
            }
            this.filteredData = this.reviews.filter(item => new Date(item.dateTime).toLocaleDateString() == new Date(this.searchDate).toLocaleDateString());
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

<style scoped>
.dateTag {
    display: inline-grid;
    width: 219px;
}

.dateinput {
    border-radius: 6px;
    margin: 3px;
    cursor: pointer;
}

.searchTag {
    display: inline-grid;
    width: 100px;
}

.srchBtn {
    border-radius: 6px;
    cursor: pointer;
    background-color: #049495;
    color: white;
}

.EGFGHd {
    /* padding: 24px 0; */

    padding: 24px 0;
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
    color: rgb(0, 0, 0);
    fill: rgb(95, 99, 104);
    stop-color: rgb(95, 99, 104);
    font-family: Roboto, Arial, sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: .025em;
    line-height: 1.2rem;
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
    width: 1000px;

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

.maind {

    margin: 51px 9px 34px 65px;

    font-size: smaller;
    width: 80%;
    background-color: #fdfdfd;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main {
    padding: 0px 0px;
    background-color: #fdfdfd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.gSGphe {
    display: grid;
    -moz-box-align: center;
    align-items: center;
    grid-column-gap: 16px;
    grid-template-columns: repeat(2, max-content);
    height: 40px;
}

.o45e4d {
    width: 364px;
}

.qZmL0 {
    width: calc(100% - 436px);
}

.wkMJlb {
    width: calc(100% - 144px);
}

.YWi3ub {
    max-width: 1296px;
}

.dp__icon {
    stroke: currentcolor;
    fill: currentcolor;
    display: flex !important;
    top: 48px !important;
}

.dp__calendar_header_item {
    text-align: center;
    flex-grow: 1;
    height: 50px !important;
    padding: 0px !important;
}
</style>
