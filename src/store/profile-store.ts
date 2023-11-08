import { defineStore } from "pinia"
import { ref } from "vue"

const profileStore = defineStore(
    "profileStore",
    () => {
        const userName = ref("")
        const selectedTheme = ref("light")
        const locale = ref("en")
        return { userName, selectedTheme, locale }
    },
    { persist: true },
)

export default profileStore
