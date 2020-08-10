<template>
  <section
    v-if="weather"
    class="temperature flex items-center justify-center flex-col text-gray-200 text-center"
  >
    <div class="flex">
      <img
        class="w-12 mx-3"
        :src="require(`@/assets/icons/${weather.weather[0].icon}.svg`)"
        :alt="weather.weather[0].description"
      />
      <h1 class="text-6xl">{{ Math.round(weather.main.temp) }}&deg;F</h1>
      <div class="flex mx-3 flex-col justify-center">
        <div class="my-1 flex">
          <span>{{Math.round(weather.main.temp_max)}}&deg;</span>
          <img class="w-4 transform -rotate-90" :src="arrowIcon" alt="Maximum temperature" />
        </div>
        <div class="my-1 flex">
          <span>{{Math.round(weather.main.temp_min)}}&deg;</span>
          <img class="w-4 transform rotate-90" :src="arrowIcon" alt="Minimum temperature" />
        </div>
      </div>
    </div>

    <div>
      <span v-if="weather.clouds.all === CLOUDINESS.CLEAR">Clear</span>
      <span v-else-if="weather.clouds.all <= CLOUDINESS.MOSTLY_CLEAR">Mostly Clear</span>
      <span v-else-if="weather.clouds.all <= CLOUDINESS.PARTLY_CLOUDY">Partly Cloudy</span>
      <span v-else-if="weather.clouds.all <= CLOUDINESS.MOSTLY_CLOUDY">Mostly Cloudy</span>
      <span v-else-if="weather.clouds.all <= CLOUDINESS.CLOUDY">Cloudy</span>
    </div>
    <span class="italic mt-1">Feels like: {{ Math.round(weather.main.feels_like) }}&deg;F</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IWeather from "@/interfaces/weather.interface";
import { arrowIcon } from "@/helpers/icon.helper";
@Component({})
export default class TemperatureComponent extends Vue {
  @Prop({ default: null })
  public weather!: IWeather | null;
  private arrowIcon = arrowIcon;
  private CLOUDINESS = {
    CLEAR: 0,
    MOSTLY_CLEAR: 30,
    PARTLY_CLOUDY: 60,
    MOSTLY_CLOUDY: 90,
    CLOUDY: 100,
  };
}
</script>
