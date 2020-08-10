<template>
  <section
    v-if="forecast"
    class="forecast flex text-gray-200 justify-center text-center mt-auto md:mt-8 mb-10"
  >
    <div
      class="flex flex-col px-5"
      v-for="(dailyForecast, index) in forecast.daily.slice(0,5)"
      :class="{'border-l': index !== 0 }"
      :key="dailyForecast.dt"
    >
      <div class="font-bold">{{getDayAbbrev(dailyForecast.dt)}}</div>
      <span class="flex items-center justify-center my-3">
        <img class="w-8" :src="require(`@/assets/icons/${dailyForecast.weather[0].icon}.svg`)" alt />
      </span>
      <span class="my-1 flex justify-center items-center">
        {{ Math.round(dailyForecast.temp.max)}}&deg;
        <img
          class="w-4 transform -rotate-90"
          :src="arrowIcon"
          alt="Maximum temperature"
        />
      </span>
      <span class="my-1 mb-2 flex justify-center items-center">
        {{Math.round(dailyForecast.temp.min)}}&deg;
        <img
          class="w-4 transform rotate-90"
          :src="arrowIcon"
          alt="Minimum temperature"
        />
      </span>
      <span class="flex items-center mt-auto justify-center">
        <img class="w-4 mr-1" :src="dropIcon" alt="Chance of precipitation" />
        <span>{{dailyForecast.rain?Math.round(dailyForecast.rain * 10):0}}%</span>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Interfaces
import IForecast from "@/interfaces/forecast.interface";
// Helpers
import { getDayName } from "@/helpers/date.helper";
import { arrowIcon, dropIcon } from "@/helpers/icon.helper";

@Component({})
export default class ForecastComponent extends Vue {
  @Prop({ default: null })
  public forecast!: IForecast | null;
  private dropIcon = dropIcon;
  private arrowIcon = arrowIcon;

  private getDayAbbrev(time: number) {
    return getDayName(new Date(time * 1000)).substring(0, 3);
  }
}
</script>
