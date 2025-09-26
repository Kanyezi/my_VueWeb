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
}