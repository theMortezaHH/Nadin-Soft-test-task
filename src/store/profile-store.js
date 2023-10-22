import { defineStore } from "pinia"
import { ref } from "vue"

const profileStore = defineStore(
    "profileStore",
    () => {
        const userName = ref("")
        const colortheme = ref("light")
        const locale = ref("fa")
        return { userName, colortheme }
    },
    { persist: true },
)

export default profileStore
