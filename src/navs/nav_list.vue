<template>
    <div
        class="big"
        v-for="(b_val,b_name) in nav_config"
        :key="b_name"
        @click.self="b_val.show = !b_val.show"
        >
        {{ b_val.name}}
        <div
            class="small"
            v-show="b_val.show"
            v-for="(s_val,s_name) in b_val.content"
            :key="s_name"
            @click="goto"
        >
            {{s_val.name}}
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, reactive } from 'vue'
    export default{
        name: 'nav_list',
        setup(){
            const nav_config = ref({})

            onMounted(async () => {
                const res = await fetch('./navs.json')
                const data = await res.json()


                for(const k in data){
                    data[k] = reactive(data[k])
                    data[k].show = false
                }
                nav_config.value = data
            })

            return {nav_config}
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