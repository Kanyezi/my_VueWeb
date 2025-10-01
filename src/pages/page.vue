<template>
    <div class="kuang">
        <div class="title">
            <h1></h1>
        </div>
        <div class="page">
          <nav v-for="i in navList" :site=i.site :title=i.titel />
        </div>
    </div>
</template>
<script>
  import nav from './tab.vue'
  import {navList} from './../data.js'
  consolo.log(navList)
</script>
<style>
</style>
