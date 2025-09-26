import { createApp } from "vue"
import { createPinia } from "pinia";

import App from "./App.vue"
import { useNavStore } from "./../stores/nav";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

const navStore = useNavStore()
navStore.loadNavKey().then(() => app.mount('#app'))