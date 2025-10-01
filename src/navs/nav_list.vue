<template>
  <div class="big" v-for="b in navKey" :key="b.id" @click.self="clear(b, navKey)">
    <i :class="[b.icon]"></i>
    {{ b.name }}
    <div class="small" v-show="b.show" v-for="s in navList[b.id]['categories']" :key="s.name">
      <i :class="[s.icon]"></i>
      {{ s.name }}
    </div>
  </div>
</template>

<script setup>
import { navKey, navList } from "./../data";
function clear(b, la) {
  if (b.show) {
    b.show = false;
    return;
  }
  for (let index = 0; index < la.length; index++) {
    la[index].show = false;
  }
  b.show = !b.show;
}
</script>

<style>
.big {
  cursor: pointer;
  border-radius: 10px;
  width: 150px;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  color: var(--nav-item-color);
}

.small {
  margin-left: 10px;
  font-size: 15px;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 5px;
}
</style>
