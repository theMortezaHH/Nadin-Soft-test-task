<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const sidebarVisible = ref(false)
//shows or hides the sidebar
function showSidebar() {
    if (!sidebarVisible.value) {
        sidebarVisible.value = true
    } else {
        sidebarVisible.value = false
    }
}

const selectedItem = ref(window.location.pathname.substring(1))
//routes user to the selected page
function setSelectedItem(targetLocation) {
    selectedItem.value = targetLocation
    sidebarVisible.value = false
    router.push("/" + targetLocation)
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
        <a-button @click="setSelectedItem('')" :class="{ selected: selectedItem === '' }">
            {{ $t("sidebar.dashbord") }}
        </a-button>
        <a-button @click="setSelectedItem('todos')" :class="{ selected: selectedItem === 'todos' }">
            {{ $t("sidebar.todos") }}
        </a-button>
        <a-button
            @click="setSelectedItem('weather')"
            :class="{ selected: selectedItem === 'weather' }"
        >
            {{ $t("sidebar.weather") }}
        </a-button>
        <a-button
            @click="setSelectedItem('profile')"
            :class="{ selected: selectedItem === 'profile' }"
        >
            {{ $t("sidebar.profile") }}
        </a-button>
    </div>
</template>

<style lang="scss" scoped>
.menu-icon {
    position: absolute;
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
    border-right: 1px solid var(--border);
    transition-duration: 0.3s;

    &.show-sidebar {
        margin: 0px;
    }
    button {
        height: 35px;
        width: 180px;
        margin: 5px 0;
        &.selected {
            color: var(--hover);
            border-color: var(--hover);
        }
    }
}
</style>
