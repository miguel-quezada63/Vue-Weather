<template>
  <section
    class="weather w-full h-screen md:h-auto md:w-1/2 xl:w-1/3 m-auto flex flex-col h-auto md:p-3 sm:rounded-md"
  >
    <SummaryComponent :weather="weather.data" />
    <section class="py-2">
      <DateComponent />
      <TemperatureComponent :weather="weather.data" />
      <LocationComponent :location="location" />
    </section>
    <ForecastComponent :forecast="forecast.data" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import fetchHelper from "@/helpers/fetch.helper";
import IWeather from "@/interfaces/weather.interface";
import ILocation from "@/interfaces/location.interface";
import { generateURLFromCity } from "@/helpers/endpoint.helper";
import SummaryComponent from "./components/Summary.component.vue";
import LocationComponent from "./components/Location.component.vue";
import TemperatureComponent from "./components/Temperature.component.vue";
import DateComponent from "./components/Date.component.vue";
import ForecastComponent from "./components/Forecast.component.vue";
import IForecast from "@/interfaces/forecast.interface";

@Component({
  components: {
    SummaryComponent,
    LocationComponent,
    TemperatureComponent,
    DateComponent,
    ForecastComponent,
  },
})
export default class WeatherComponent extends Vue {
  async created() {
    try {
      await this.$store.dispatch("LocationModule/setLocationAndIP");
      await this.$store.dispatch(
        "WeatherModule/setWeather",
        this.location.city
      );
      await this.$store.dispatch("WeatherModule/setForecast", {
        lat: this.location.latitude,
        lon: this.location.longitude,
      });
    } catch (err) {
      console.error(err);
    }
  }

  public get weather(): IWeather {
    return this.$store.getters["WeatherModule/getWeather"];
  }

  public get location(): ILocation {
    return this.$store.getters["LocationModule/getLocation"];
  }

  public get forecast(): IForecast {
    return this.$store.getters["WeatherModule/getForecast"];
  }
}
</script>

<style lang="scss" scoped>
.weather {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 20px 0px;
  position: absolute;
  background: #4481eb;
  margin: 0 auto;
}
</style>
