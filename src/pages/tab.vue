<template>
  <div class="kuang-tab">
    <div id="page-title">
      {{ title }}
    </div>
    <div class="tabs">
      <div v-for="i in site" class="tab">
        <i :class="['fon', i.icon]"></i>
        <p class="name">{{ i.name }}</p>
        <p class="description">{{ i.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  site: [
    {
      name: String,
      url: String,
      icon: String,
      description: String
    }
  ]
});
</script>

<style>
.kuang-tab {
  margin-top: 100px;
  padding: 32px;
  margin: 24px;
  border-radius: 15px;
  box-sizing: border-box;
  background: linear-gradient(145deg, var(--card-bg-gradient-1), var(--card-bg-gradient-2));
}

#page-title {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  margin-bottom: 20px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 1.2rem;
  width: 100%;
}

.tab {
  height: 140px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background: linear-gradient(145deg, var(--secondary-bg), var(--site-card-bg-gradient-1));
  border: 1px solid var(--border-color);
}

.tab i {
  font-size: 30px;
}
</style>
