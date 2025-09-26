import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

interface NavItem{
    id:string
    name:string
    icon:string
    show?:boolean
}

interface PageDate{
    title:string
    subtitle:string
    template:string
    categories:any[]
}

export const useNavStore = defineStore('data', () => {
    const navKey = ref<Record<string, NavItem>>({})
    const navList = reactive<Record<string, PageData>>({})
    const loaded = ref(false)

    async function loadNavKey() {
        if(loaded.value) return
        const res = await fetch('./user/navigation.json')
        const data = await res.json()


        for(const k in data){
            data[k] = reactive(data[k])
            data[k].show = false
            const id = data[k].id
            const t = await fetch('./user/pages/'+id+'.json')
            const te = await t.json()

            navList[id]=te
            loaded.value = true
        }
        navKey.value = data
    }
    async function loadPage(id: string) {
        if (navList[id]) return navList[id]               // 已缓存直接返回
        const r = await fetch(`./user/pages/${id}.json`)
        const json: PageData = await r.json()
        navList[id] = json
        return json
    }
})