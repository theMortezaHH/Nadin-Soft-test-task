import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"
import { createI18n } from "vue-i18n"
import useProfileStore from "@/store/profile-store.ts"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@/style.css"
import App from "@/App.vue"
import Dashbord from "@/pages/Dashbord.vue"
import Todos from "@/pages/Todos.vue"
import Weather from "@/pages/Weather.vue"
import Profile from "@/pages/Profile.vue"
import NotFound from "@/pages/NotFound.vue"

const pinia = createPinia()
pinia.use(piniaPersist) //a pinia plugin for saving store in localstorage
const app = createApp(App)
app.use(pinia)

const profileStore = useProfileStore()

const routes = [
    { path: "/", component: Dashbord },
    { path: "/todos", component: Todos },
    { path: "/weather", component: Weather },
    { path: "/profile", component: Profile },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//i18n config
const messages = Object.fromEntries(
    Object.entries(import.meta.glob<{ default: any }>("../locales/*.yaml", { eager: true })).map(([key, value]) => {
        return [key.slice(11, -5), value.default]
    }),
)
const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: profileStore.locale,
    messages,
})

const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount("#app")
