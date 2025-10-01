<template>
    <div class="kuang">
        <div class="title">
            <h1></h1>
        </div>
        <div class="page">
          <div v-for="i in navKey">
            <tab v-show="i.show" v-for="ni in navList[i.id].categories" :site=ni.sites :title=ni.name />
          </div>
        </div>
    </div>
</template>
<script setup>
  import tab from './tab.vue'
  import {navList,navKey} from './../data.js'

</script>
<style>
  .kuang{
    display:flex
  }
</style>
