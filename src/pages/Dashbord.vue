<script setup>
import { ref, onUnmounted } from "vue"

const time = ref(getCurrentTime())
const hour = ref(new Date().getHours())

//this interval updates time every second
const timerInterval = setInterval(() => {
    time.value = getCurrentTime()
    hour.value = new Date().getHours()
}, 1000)

function getCurrentTime() {
    const currentTime = new Date()
    return `${makeTwoDigit(currentTime.getHours())} : ${makeTwoDigit(currentTime.getMinutes())}`
}

function makeTwoDigit(str) {
    return String(str).padStart(2, "0")
}

//remover interval to clean up memory
onUnmounted(() => {
    clearInterval(timerInterval)
})
</script>
<template>
    <h3 class="time">{{ time }}</h3>
    <p class="message">{{ $t(`messageList[${hour}]`) }}</p>
</template>
<style lang="scss" scoped>
.time {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 80px;
    direction: ltr;
}
.message {
    font-size: 20px;
    text-align: center;
    width: 80dvw;
    margin: 0 auto;
}
</style>
