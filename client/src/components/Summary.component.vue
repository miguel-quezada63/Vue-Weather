<template>
  <section v-if="weather" class="summary flex pt-5 pb-3">
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="dropIcon" alt="Chance of precipitation" />
      <span class="mt-1">{{ weather.rain ? weather.rain["1h"] * 100 : 0 }}%</span>
    </div>
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="windIcon" alt="Wind speed" />
      <span class="mt-1">{{ Math.round(weather.wind.speed) }} mph</span>
    </div>
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="cloudIcon" alt="Cloudiness percentage" />
      <span class="mt-1">{{ weather.clouds.all }}%</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Interfaces
import IWeather from "../../../shared/interfaces/weather.interface";
// Helpers
import { dropIcon, windIcon, cloudIcon } from "@/helpers/icon.helper";

@Component({})
export default class SummaryComponent extends Vue {
  @Prop({ default: null })
  public weather!: IWeather | null;
  private dropIcon = dropIcon;
  private windIcon = windIcon;
  private cloudIcon = cloudIcon;
}
</script>
