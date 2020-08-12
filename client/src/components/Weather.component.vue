<template>
  <section class="weather w-full h-screen md:h-auto md:w-1/2 xl:w-1/3 relative">
    <LoadingComponent :isLoading="isLoading" />
    <section
      :class="{ init: true, fadein: !isLoading }"
      class="h-screen m-auto flex flex-col md:p-3 sm:rounded-md"
    >
      <SummaryComponent :weather="weather.data" />
      <section class="my-2">
        <DateComponent />
        <TemperatureComponent :weather="weather.data" />
        <LocationComponent :location="location" />
      </section>
      <ForecastComponent :forecast="forecast.data" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// Components
import LoadingComponent from "./Loading.component.vue";
import SummaryComponent from "./Summary.component.vue";
import DateComponent from "./Date.component.vue";
import TemperatureComponent from "./Temperature.component.vue";
import LocationComponent from "./Location.component.vue";
import ForecastComponent from "./Forecast.component.vue";
// Interfaces
import IWeather from "@/interfaces/weather.interface";
import ILocation from "@/interfaces/location.interface";
import IForecast from "@/interfaces/forecast.interface";
// Helpers
import fetchHelper from "@/helpers/fetch.helper";
import { config } from "@vue/test-utils";

@Component({
  components: {
    LoadingComponent,
    SummaryComponent,
    LocationComponent,
    TemperatureComponent,
    DateComponent,
    ForecastComponent,
  },
})
export default class WeatherComponent extends Vue {
  // Property used in order to track if data is still being fetched from API's
  private isLoading: boolean = true;
  // Dispatch events to fetch weather, location, and forecast data
  async created() {
    try {
      await this.$store.dispatch("LocationModule/setIP");
      const { weather, forecast, location } = await fetchHelper(
        `http://localhost:3000/weather/all?ip=${this.ip}`
      );
      this.$store.dispatch("WeatherModule/setWeather", weather);
      this.$store.dispatch("WeatherModule/setForecast", forecast);
      this.$store.dispatch("LocationModule/setLocation", location);
      this.isLoading = false;
    } catch (err) {
      console.error(err);
    }
  }

  // Getters for Vuex store
  public get location(): ILocation {
    return this.$store.getters["LocationModule/getLocation"];
  }

  public get ip(): ILocation {
    return this.$store.getters["LocationModule/getIP"];
  }

  public get weather(): IWeather {
    return this.$store.getters["WeatherModule/getWeather"];
  }

  public get forecast(): IForecast {
    return this.$store.getters["WeatherModule/getForecast"];
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.weather {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 20px 0px;
  background: $app-bg;
}

.init {
  opacity: 0;
  visibility: hidden;
}

.fadein {
  animation: 1s fadein forwards ease-in;
}

@keyframes fadein {
  to {
    opacity: 1;
    visibility: initial;
  }
}
</style>
