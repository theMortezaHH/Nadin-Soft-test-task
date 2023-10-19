import { defineStore } from "pinia"
import { computed, ref } from "vue"

const statusStore = defineStore("status", () => {
    const sidebar = ref("Hide")
    return { sidebar }
})

export default statusStore
