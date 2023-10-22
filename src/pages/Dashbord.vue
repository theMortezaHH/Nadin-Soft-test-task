<script setup>
import { ref } from "vue"

const hours = ref(new Date().getHours())
const minutes = ref(new Date().getMinutes())
//this interval updates time every second
setInterval(() => {
    hours.value = new Date().getHours()
    minutes.value = new Date().getMinutes()
}, 1000)
</script>
<template>
    <h3 class="time">{{ hours }} : {{ minutes }}</h3>
    <p class="message">{{ $t(`messageList[${hours}]`) }}</p>
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
}
</style>
