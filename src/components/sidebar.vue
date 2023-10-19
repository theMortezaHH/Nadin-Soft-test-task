<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const sidebarVisible = ref(false)
//shows or hides the sidebar
function showSidebar() {
    if (!sidebarVisible.value) {
        sidebarVisible.value = true
    } else {
        sidebarVisible.value = false
    }
}

const selectedItem = ref(1)

function setSelectedItem(item) {
    selectedItem.value = item
    sidebarVisible.value = false
}
</script>

<template>
    <svg viewBox="0 0 512 512" class="menu-icon" @click="showSidebar">
        <path
            fill="none"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="48"
            d="M88 152h336M88 256h336M88 360h336"
        />
    </svg>
    <div class="prevent-click" @click="showSidebar" v-if="sidebarVisible"></div>
    <div class="sidebar" :class="{ 'show-sidebar': sidebarVisible }">
        <button @click="setSelectedItem(1)" :class="{ selected: selectedItem === 1 }">{{
            $t("sidebar.dashbord")
        }}</button>
        <button @click="setSelectedItem(2)" :class="{ selected: selectedItem === 2 }">{{
            $t("sidebar.profile")
        }}</button>
        <button @click="setSelectedItem(3)" :class="{ selected: selectedItem === 3 }">{{
            $t("sidebar.todos")
        }}</button>
        <button @click="setSelectedItem(4)" :class="{ selected: selectedItem === 4 }">{{
            $t("sidebar.weather")
        }}</button>
    </div>
</template>

<style lang="scss" scoped>
.menu-icon {
    position: fixed;
    width: 23px;
    top: 23px;
    margin: 0 20px;
    stroke: var(--icon);
}
.prevent-click {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
}
.sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0 -210px;
    bottom: 0;
    padding: 40px 0 0 0;
    height: 100%;
    width: 200px;
    background: var(--background);
    box-shadow: 0 2px 5px 2px var(--shadow);
    border-left: 1px solid var(--border);
    transition-duration: 0.3s;

    &.show-sidebar {
        margin: 0px;
    }
    button {
        height: 30px;
        width: 120px;
        margin: 10px 0;
        background: none;
        border: none;
        border-radius: 5px;
        padding: 5px 0 0 0;
        transition-duration: 0.2s;
        &:hover {
            background: var(--box);
        }
        &.selected {
            font-weight: bold;
            box-shadow: 0 1px 3px 1px var(--shadow);
        }
    }
}
</style>
