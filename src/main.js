import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createI18n } from "vue-i18n"

const { availableLocales } = useI18n()

//i18n config
const messages = Object.fromEntries(
    Object.entries(import.meta.glob("../locales/*.yml", { eager: true })).map(([key, value]) => {
        return [key.slice(11, -5), value.default]
    }),
)
const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: "en",
    messages,
})

const app = createApp(App)

app.use(i18n)
app.mount("#app")
