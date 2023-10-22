import { defineStore } from "pinia"
import { ref } from "vue"

const profileStore = defineStore(
    "profileStore",
    () => {
        const userName = ref("")
        const colortheme = ref("light")
        const locale = ref("en")
        return { userName, colortheme, locale }
    },
    { persist: true },
)

export default profileStore
