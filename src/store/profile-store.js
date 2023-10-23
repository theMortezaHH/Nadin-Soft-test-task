import { defineStore } from "pinia"
import { ref } from "vue"

const profileStore = defineStore(
    "profileStore",
    () => {
        const userName = ref("")
        const selectedTheme = ref("light")
        const locale = ref("en")
        const themes = ref({
            light: {
                background: "#ffffff",
                box: "#f5f5f5",
                border: "#aaaaaa",
                shadow: "#00000055",
                button: "#ffffff",
                hover: "#1890FF",
                text: "#000000",
                icon: "#000000",
            },
            dark: {
                background: "#03001C",
                box: "#202020",
                border: "#301E67",
                shadow: " #00000055",
                button: "#cccccc",
                hover: "#5B8FB9",
                text: "#B6EADA",
                icon: "#B6EADA",
            },
        })
        return { userName, selectedTheme, locale, themes }
    },
    { persist: true },
)

export default profileStore
