<script setup>
import { computed, ref } from "vue"
import { useI18n } from "vue-i18n"
import SideBar from "@/components/sidebar.vue"

const { t } = useI18n()
document.querySelector("body").style.direction = t("direction")
</script>

<template>
    <div class="header">
        <p class="headerTitle">{{ $t("header.title") }}</p>
        <p class="headerSubTitle">{{ $t("header.subTitle") }}</p>
    </div>
    <SideBar />
</template>

<style scoped lang="scss">
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
        margin: 0 20px;
    }
}
</style>
