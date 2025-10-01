<template>
  <div class="kuang">
    <div class="title">
      <h1></h1>
    </div>
    <div class="pages">
      <div class="page" v-for="i in navKey">
        <tab v-show="i.show" v-for="ni in navList[i.id].categories" :site=ni.sites :title=ni.name />
      </div>
    </div>
  </div>
</template>
<script setup>
import tab from './tab.vue'
import { navList, navKey } from './../data.js'

</script>
<style>
.kuang {
  width: 100%;
  margin: 0 auto;
}
</style>
