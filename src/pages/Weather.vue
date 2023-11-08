<script setup lang="ts">
import { onMounted } from "vue"
// import data from "@/database/location-data.ts"
// import weathercodes from "@/database/weathercodes.ts"
// import { useI18n } from "vue-i18n"

// const { t } = useI18n()
// const cityNames = ref<(string | null)[]>([])
// const showWeatherStatus = ref(false)

//this const contains the value that user enters
// const cityNameInput = ref("")

//this const contains options for auto complete input
// const options = ref<(string | null)[]>([])

//this function is responsible for selecting options based on cityNameInput
// function onSearch() {
//     options.value = [] //to reset options
//     showWeatherStatus.value = false
//     //this const contains the correct input type for city name that user enters(makes first letter capital)
//     const currectInputType = cityNameInput.value.charAt(0).toUpperCase() + cityNameInput.value.slice(1)

//     //this const filters city names
//     const avalableOptions = cityNames.value.filter((x: any) => x.includes(currectInputType))

//     //user must enter atleast 2 letters
//     if (cityNameInput.value.length >= 2) {
//         //builds options for user
//         for (let index = 0; index < avalableOptions.length; index++) {
//             options.value[index] = {
//                 value: avalableOptions[index],
//             }
//         }
//     }
// }

//finds latitude and longitude for entered city
// function onSelect() {
//     const cityDetails = data.find((x) => x.city === cityNameInput.value)
//     const cityLatitude = cityDetails.lat
//     const cityLongitude = cityDetails.lng
//     getWeather(cityLatitude, cityLongitude)
// }

// const temperature = ref()
// const weather = ref()
//an async function that gets weather data from open-meteo API
// async function getWeather(cityLatitude, cityLongitude) {
//     const apiResponse = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current_weather=true`,
//     )
//     const response = await apiResponse.json()
//     temperature.value = await response.current_weather.temperature
//     weather.value = await weathercodes[response.current_weather.weathercode]
//     weather.value = t(`weatherStatus.${weather.value}`)
//     showWeatherStatus.value = true
// }

//extracts city names from data into cityNames array
onMounted(() => {
    // for (let index = 0; index < data.length; index++) {
    //     cityNames.value.push(data[index].city)
    // }
})
</script>
<template>
    <div class="container">
        <!-- <a-auto-complete
            class="auto-complete"
            v-model:value="cityNameInput"
            :options="options"
            style="width: 200px"
            :placeholder="$t('enterTheCityName')"
            @select="onSelect()"
            @search="onSearch()"
        />
        <a-card class="card" :title="`${$t('weatherDataFor')}: ${cityNameInput}`" v-if="showWeatherStatus">
            <p> {{ $t("temperature") }}: {{ temperature }} {{ $t("degreeCelsius") }} </p>
            <p>{{ $t("weather") }}: {{ weather }}</p>
        </a-card> -->
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    .card {
        margin: 20px 0 0 0;
        width: 300px;
    }
}
</style>
@/database/location-data @/database/location-data @/database/weathercodes
