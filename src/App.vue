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
          <page />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import nav_main from './nav.vue'
import { navKey } from "./data.js";
import page from './pages/page.vue'
// console.log(navKey)

</script>

<style>
.left-nav {
  height: 100%;
  width: 240px;
  position: fixed;
  background-color: var(--sidebar-bg);
  box-shadow: 2px 0 10px var(--shadow-color);
}

.app {
  width: 100%;
}

.main {
  padding: 24px;
  padding-left: 264px;
  background-color: var(--bg-color);
}
</style>
