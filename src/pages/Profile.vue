<script setup>
import useProfileStore from "@/store/profile-store.js"

const profileStore = useProfileStore()

function changeColortheme() {
    location.reload()
}
function changeLocale() {
    location.reload()
}
</script>
<template>
    <div class="container">
        <p class="title">{{ $t("enterYourUserName") }}</p>
        <a-input
            class="input"
            v-model:value="profileStore.userName"
            :placeholder="$t('enterYourUserName')"
        />

        <p class="title">{{ $t("changeColortheme") }}</p>
        <a-select
            class="input"
            ref="select"
            v-model:value="profileStore.selectedTheme"
            @change="changeColortheme()"
        >
            <a-select-option
                v-for="(value, key, index) in profileStore.themes"
                :key="index"
                :value="key"
            >
                {{ $t(key) }}
            </a-select-option>
        </a-select>

        <p class="title">{{ $t("changeLanguage") }}</p>
        <a-select
            class="input"
            ref="select"
            v-model:value="profileStore.locale"
            @change="changeLocale()"
        >
            <a-select-option value="en">English</a-select-option>
            <a-select-option value="fa">فارسی</a-select-option>
        </a-select>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;

    .input {
        width: 90dvw;
        max-width: 300px;
        margin: 0 0 20px 0;
    }
    .title {
        margin: 0 0 5px 0;
    }
}
</style>
