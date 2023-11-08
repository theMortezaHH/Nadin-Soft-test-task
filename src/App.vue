<script setup lang="ts">
import { onMounted } from "vue"
// import { useI18n } from "vue-i18n"
// import useProfileStore from "./store/profile-store.js"
import SideBar from "@/components/sidebar.vue"

// const profileStore = useProfileStore()

// const { t } = useI18n()
// document.querySelector("body").style.direction = t("direction")

onMounted(() => {
    // const body = document.querySelector("body")
    // body.style.setProperty("--background", profileStore.themes[profileStore.selectedTheme].background)
    // body.style.setProperty("--box", profileStore.themes[profileStore.selectedTheme].box)
    // body.style.setProperty("--border", profileStore.themes[profileStore.selectedTheme].border)
    // body.style.setProperty("--shadow", profileStore.themes[profileStore.selectedTheme].shadow)
    // body.style.setProperty("--button", profileStore.themes[profileStore.selectedTheme].button)
    // body.style.setProperty("--hover", profileStore.themes[profileStore.selectedTheme].hover)
    // body.style.setProperty("--text", profileStore.themes[profileStore.selectedTheme].text)
    // body.style.setProperty("--icon", profileStore.themes[profileStore.selectedTheme].icon)
})
</script>

<template>
    <!-- <a-config-provider
        :theme="{
            token: {
                colorBgBase: profileStore.themes[profileStore.selectedTheme].box,
                colorPrimary: profileStore.themes[profileStore.selectedTheme].hover,
                colorPrimaryBg: profileStore.themes[profileStore.selectedTheme].hover,
                colorTextBase: profileStore.themes[profileStore.selectedTheme].text,
                colorBorder: profileStore.themes[profileStore.selectedTheme].border,
            },
        }"
    >
    </a-config-provider> -->
    <div class="header">
        <h1 class="headerTitle">{{ $t("header.title") }}</h1>
        <h2 class="headerSubTitle">{{ $t("header.subTitle") }}</h2>
    </div>

    <div>
        <RouterView />
    </div>

    <SideBar />
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 0 60px;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid var(--border);
    .headerTitle {
        font-size: 20px;
        font-weight: bold;
    }
    .headerSubTitle {
        font-size: 14px;
        margin: 0 15px;
        font-weight: normal;
    }
}
</style>
