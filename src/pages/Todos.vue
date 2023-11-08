<script setup lang="ts">
// import { ref } from "vue"
// import useTodoStore from "@/store/todo-store"
// import { useI18n } from "vue-i18n"
// import { DeleteOutlined } from "@ant-design/icons-vue"
// import { notification } from "ant-design-vue"

// const todoStore = useTodoStore()

// const { t } = useI18n()

// const modalVisible = ref(false)
// const newTodoTitle = ref("")
// const newTodoDetails = ref("")
//this function shows modal and resets values for user
// function showModal() {
//     newTodoTitle.value = ""
//     newTodoDetails.value = ""
//     modalVisible.value = true
// }
//this function adds new item to todo list
// function addNewTodoItem() {
//     modalVisible.value = false
//     todoStore.todoList.push({ title: newTodoTitle.value, details: newTodoDetails.value })
// }

//this function removes items from todo list
// function handleClick(item) {
//     todoStore.todoList.splice(item, 1)
// }
</script>
<template>
    <div class="list-container">
        <!-- <a-empty v-if="todoStore.todoList.length === 0">
            <template #description>
                <span>
                    {{ $t("noItem") }}
                </span>
            </template>
        </a-empty>

        <a-collapse v-if="todoStore.todoList.length" class="list" collapsible="header">
            <a-collapse-panel
                v-for="(item, index) in todoStore.todoList"
                :key="index"
                :id="index"
                :header="item.title"
            >
                <p>{{ item.details }}</p>
                <template #extra><DeleteOutlined @click="handleClick(index)" /></template>
            </a-collapse-panel>
        </a-collapse>

        <a-button @click="showModal()" style="margin: 20px 0">{{ $t("addNewTodoItem") }}</a-button>
        <a-modal v-model:open="modalVisible" :title="$t('addNewTodoItem')">
            <template #footer>
                <a-button key="back" @click="handleCancel">{{ $t("cancel") }}</a-button>
                <a-button
                    type="primary"
                    @click="addNewTodoItem()"
                    :disabled="!newTodoTitle.length || !newTodoDetails.length"
                >
                    {{ $t("confirm") }}
                </a-button>
            </template>
            <a-input
                class="new-todo-input"
                v-model:value="newTodoTitle"
                :placeholder="$t('title')"
            />
            <a-input
                class="new-todo-input"
                v-model:value="newTodoDetails"
                :placeholder="$t('details')"
            />
        </a-modal> -->
    </div>
</template>
<style lang="scss" scoped>
.list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 30px 0 0 0;
    .list {
        width: 90dvw;
        max-width: 700px;
    }
}
.new-todo-input {
    margin: 10px auto;
}
</style>
