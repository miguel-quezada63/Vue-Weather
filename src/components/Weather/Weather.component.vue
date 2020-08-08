<template>
  <section class="weather w-1/3 m-auto">
    <SummaryBar :weather="weather" />
    <section class="py-5">
      <Location :location="location" />
      <Temperature :weather="weather" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import fetchHelper from "@/helpers/fetch.helper";
import IWeather from "@/interfaces/weather.interface";
import ILocation from "@/interfaces/location.interface";
import { generateURLFromCity } from "@/helpers/endpoint.helper";
import SummaryBar from "./components/SummaryBar.component.vue";
import Location from "./components/Location.component.vue";
import Temperature from "./components/Temperature.component.vue";

@Component({
  components: { SummaryBar, Location, Temperature },
})
export default class Weather extends Vue {
  async created() {
    try {
      await this.$store.dispatch("LocationModule/setLocationAndIP");
      await this.$store.dispatch(
        "WeatherModule/setWeather",
        this.location.city
      );
    } catch (err) {
      console.error(err);
    }
  }

  public get weather() {
    return this.$store.getters["WeatherModule/getWeather"];
  }

  public get location() {
    return this.$store.getters["LocationModule/getLocation"];
  }
}
</script>

<style lang="scss" scoped>
.weather {
  height: 80vh;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 20px 0px;
  position: absolute;
  background: #4481eb;
  border-radius: 7.5px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
