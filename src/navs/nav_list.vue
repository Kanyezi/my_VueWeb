<template>
    <div
        class="big"
        v-for="b in nav_key"
        :key="b.id"
        @click.self="b.show = !b.show"
        >
        {{ b.name}}
        <div
            class="small"
            v-show="b.show"
            v-for="s in nav_list[b.id]['categories']"
            @click="goto"
        >
            {{s.name}}
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, reactive } from 'vue'
    export default{
        name: 'nav_list',
        setup(){
            const nav_key = ref({})
            const nav_list = reactive({})
            onMounted(async () => {
                const res = await fetch('./user/navigation.json')
                const data = await res.json()


                for(const k in data){
                    data[k] = reactive(data[k])
                    data[k].show = false
                    const id = data[k].id
                    const t = await fetch('./user/pages/'+id+'.json')
                    const te = await t.json()

                    nav_list[id]=te
                }
                nav_key.value = data
            })
            // console.log(nav_list)
            return {nav_key,nav_list}
        },
        methods:{
            goto(){
                
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