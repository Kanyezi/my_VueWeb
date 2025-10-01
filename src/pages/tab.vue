<template>
    <div class="kuang">
        <div class="title">
          {{title}}
        </div>
        <div class="tabs">
            <div v-for="i in site" class="tab">
              <p class="fon"></p>
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
    .tabs{
        display: flex;
        flex-direction: row;
    }
    .tab{
        width: 100px;
        height: 100px;
        box-shadow: 0 0 10px #ddd;
    }
</style>
