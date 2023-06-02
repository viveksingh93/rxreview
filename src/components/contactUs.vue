<template>
<HeaderComp />
<div>
    <table>
        <tr class="contactus">
            <td>
                <img class="" alt="Vue logo" src="../assets/radix.jpg">
            </td>
            <td>
                <h1>
                    Contact US
                </h1>
                <b>
                    <div>Radixweb - Radix Software Services Pvt Ltd</div><br>
                    Jaipur Rajasthan 302017
                </b>
            </td>
        </tr>
    </table>

</div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
export default {
    name: 'contactUS',
    components: {
        HeaderComp
    }
}
</script>

<style>
.contactus {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    margin: 0px 500px;
    margin-top: 100px;
}
</style>
