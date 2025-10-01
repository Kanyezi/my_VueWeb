<template>
    <div class="kuang-tab">
        <div class="title">
          {{title}}
        </div>
        <div class="tabs">
            <div v-for="i in site" class="tab">
              <i :class="['fon',i.icon]"></i>
              <p class="name">{{i.name}}</p>
              <p class="description">{{i.description}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    title:String,
    site:[
      {
        name:String,
        url:String,
        icon:String,
        description:String
      }
    ]
  });
</script>

<style>
    .kuang-tab{
      width:100%;
      
    }
    .tabs{
      display:flex;
      flex-wrap:wrap;
      width:100%;
    }
    .tab{
      width: 150px;
      height: 100px;
      box-shadow: 0 0 10px #ddd;
      padding: 20px;
    }
</style>
