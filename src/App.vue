<template>
    <div class="app">
        <div class="left-nav">
            <nav_main />
        </div>
        <div class="main">
            <div class="top-Search">

            </div>
            <div class="title">
                <div class="page-title">

                </div>
                <div class="page-subtitl">

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import nav_main from './nav.vue'
    export default{
        name:'app',
        components:{
            nav_main
        }
    }
</script>

<style>
    .left-nav{
        background-color: #444;
        height: 100%;
        width: 200px;
    }
</style>