<template>
    <div
        class="big"
        v-for="b in navKey"
        :key="b.id"
        @click.self=show()
        >
        {{ b.name }}
        <div
            class="small"
            v-show="b.show"
            v-for="s in navList[b.id]['categories']"
            :key="s.name"
        >
            {{ s.name }}
        </div>
    </div>
</template>

<script setup>
    import { navKey, navList } from "./../data";
    function show(){
        console.log(this.value)
        this.value=!this.value
    }
</script>

<style>
    .big{
        cursor: pointer;
        padding: 10px;
        margin: 0 auto;
        padding-left: 20px;
        border-radius: 10px;
        width: 150px;
        font-size: 18px;
        box-sizing: border-box;
    }
    .small{
        margin-left: 10px;
        font-size: 15px;
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 5px;
    }
</style>