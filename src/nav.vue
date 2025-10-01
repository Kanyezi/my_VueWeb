<template>
    <div class="nav">
        <nav_list />
    </div>
</template>

<script>
    import nav_list from "./navs/nav_list.vue";
    export default{
        name:'nav_main',
        components:{
            nav_list
        }
    }
</script>

<style>
    .nav{
        height: 100%;
        /* background-color: #444; */
    }
</style>
