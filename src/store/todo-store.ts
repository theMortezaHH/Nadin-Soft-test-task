import { defineStore } from "pinia"
import { ref } from "vue"

const todoStore = defineStore(
    "todoList",
    () => {
        const todoList = ref([])
        return { todoList }
    },
    { persist: true },
)

export default todoStore
