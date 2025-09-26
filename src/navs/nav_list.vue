<template>
    <div
        class="big"
        v-for="b in navKey"
        :key="b.id"
        @click.self="b.show = !b.show"
        >
        {{ b.name}}
        <div
            class="small"
            v-show="b.show"
            v-for="s in navList[b.id]['categories']"
            @click="goto"
        >
            {{s.name}}
        </div>
    </div>
</template>

<script lang="ts">
    import { storeToRefs } from "pinia";
    import { useNavStore } from "./../../stores/nav";
    import { ref, watchEffect } from 'vue'

    const store = useNavStore()
    const {navKey, navList} = storeToRefs(store)

    const currentPage = ref()

    async function openPage(id: string){
        currentPage.value = await store.loadPage(id)
    }
    
    watchEffect(() => {
        const first = Object.keys(navKey.value)[0]
        if (first) openPage(first)
    })
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
    }
</style>