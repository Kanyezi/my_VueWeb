import { provide, ref, reactive } from 'vue'

    // 1. 真正可写的响应式数据
export    const navKey = ref({})
export    const navList = reactive({})

    const res = await fetch('./user/navigation.json')
    const data = await res.json()

    for (const k in data) {
        data[k] = reactive(data[k])
        data[k].show = false
        const id = data[k].id
            
        const t = await fetch('./user/pages/' + id + '.json')
        const te = await t.json()

        navList[id] = te
    }
    navKey.value = data