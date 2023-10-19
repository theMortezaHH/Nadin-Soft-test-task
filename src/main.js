import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persist"
import { createI18n } from "vue-i18n"
import "@/style.css"
import App from "@/App.vue"

//i18n config
const messages = Object.fromEntries(
    Object.entries(import.meta.glob("../locales/*.yaml", { eager: true })).map(([key, value]) => {
        return [key.slice(11, -5), value.default]
    }),
)
const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: "en",
    messages,
})

const pinia = createPinia()
pinia.use(piniaPersist) //a pinia plugin for saving store in localstorage
const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.mount("#app")
