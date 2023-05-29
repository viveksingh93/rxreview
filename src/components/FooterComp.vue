<template>
<div class="footer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="lft">
        <p>Copy Right  @ vivek singh 2023</p>
    </div>
    <!-- <div class="right">Get Connect With Me</div><br>
    <a class="right" href="https://github.com/vskajay" target="_blank"><i class="fa fa-github" style="font-size:24px"></i> Github</a>
    <br>
    <a class="right" href="https://www.linkedin.com/in/vivek-singh-337b95189/" target="_blank"><i class="fa fa-linkedin" style="font-size:24px"></i> LinkedIn</a><br>
    <a class="right" href="https://radixweb.com/" target="_blank"><i class="fa fa-address-book" style="font-size:24px"></i> Contact Us</a>
    <br>-->
</div> 
</template>

<script>
export default {
    name: 'FooterComp',
}
</script>

<style>
.footer {
    background-color: #333;
    position: absolute;
    color: rgb(255, 254, 255);
    width: 100%;
    text-align: center;
    left: 0;
    bottom: 0;
    height: 50px;
}

.lft {
    /* float: left; */
}

.right {
    float: right;
    text-align: justify;
    width: 500px;
    position: initial;

}
</style>
