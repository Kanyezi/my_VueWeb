<template>
    <div
        class="big"
        v-for="b in navKeyValues"
        :key="b.id"
        @click.self="toggleShow(b)"
    >
        {{ b.name }}
        <div
            class="small"
            v-show="b.show"
            v-for="s in getCategories(b.id)"
            :key="s.name"
            @click="goto(s)"
        >
            {{ s.name }}
        </div>
    </div>
</template>

<script lang="ts">
    import { storeToRefs } from "pinia";
    import { useNavStore } from "./../../stores/nav";
    import { ref, watchEffect, computed, onMounted } from 'vue'

    export default{
        name: 'NavList',
        setup(){
            // 在 setup 函数内部使用 store
            const store = useNavStore()
            const { navKey, navList } = storeToRefs(store)
            const currentPage = ref()

            // 将对象转换为数组以便遍历
            const navKeyValues = computed(() => Object.values(navKey.value))

            // 获取分类数据
            const getCategories = (id: string) => {
                return navList.value[id]?.categories || []
            }

            // 切换显示状态
            const toggleShow = (item: any) => {
                item.show = !item.show
            }

            async function openPage(id: string) {
                currentPage.value = await store.loadPage(id)
            }

            // 导航函数
            const goto = (item: any) => {
                // 实现导航逻辑
                console.log('Navigate to:', item)
            }

            onMounted(async () => {
                // 确保数据已加载
                if (!Object.keys(navKey.value).length) {
                    await store.loadNavKey()
                }
                
                // 加载第一个页面
                const first = Object.keys(navKey.value)[0]
                if (first) {
                    await openPage(first)
                }
            })

            // 监听 navKey 变化
            watchEffect(() => {
                const first = Object.keys(navKey.value)[0]
                if (first) {
                    openPage(first)
                }
            })

            return {
                navKeyValues,
                getCategories,
                toggleShow,
                goto,
                currentPage
            }
        }
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
    }
</style>