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

<script setup>
    import nav_main from './nav.vue'
    import { navKey } from "./data.js";
    // console.log(navKey)
    
</script>

<style>
    .left-nav{
        background-color: #444;
        height: 100%;
        width: 200px;
    }
</style>