import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

interface NavItem {
    id: string
    name: string
    icon: string
    show?: boolean
}

interface PageData {
    title: string
    subtitle: string
    template: string
    categories: any[]
}

export const useNavStore = defineStore('data', () => {
    // 使用 ref 和 reactive 定义状态
    const navKey = ref<Record<string, NavItem>>({})
    const navList = reactive<Record<string, PageData>>({})
    const loaded = ref(false)

    // 定义 actions（普通函数）
    async function loadNavKey() {
        if (loaded.value) return
        
        const res = await fetch('./user/navigation.json')
        const data = await res.json()

        for (const k in data) {
            data[k] = reactive(data[k])
            data[k].show = false
            const id = data[k].id
            
            const t = await fetch('./user/pages/' + id + '.json')
            const te = await t.json()

            navList[id] = te
            loaded.value = true
        }
        navKey.value = data
    }

    async function loadPage(id: string) {
        if (navList[id]) return navList[id] // 已缓存直接返回
        
        const r = await fetch(`./user/pages/${id}.json`)
        const json: PageData = await r.json()
        navList[id] = json
        return json
    }

    // 返回状态和函数
    return {
        navKey,
        navList,
        loaded,
        loadNavKey,
        loadPage
    }
})