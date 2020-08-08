<template>
  <section v-if="weather" class="summary flex py-5">
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="icons[0]" alt="Chance of precipitation" />
      <span class="mt-1"
        >{{ weather.rain ? weather.rain["1h"] * 100 : 0 }}%</span
      >
    </div>
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="icons[1]" alt="Wind speed" />
      <span class="mt-1">{{ weather.wind.speed }} mph</span>
    </div>
    <div class="w-1/3 text-gray-200 flex items-center flex-col">
      <img class="w-8" :src="icons[2]" alt="Cloudiness percentage" />
      <span class="mt-1">{{ weather.clouds.all }}%</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IWeather from "@/interfaces/weather.interface";

@Component({})
export default class SummaryBar extends Vue {
  @Prop({ default: null })
  public weather!: IWeather | null;

  private icons = [
    require("@/assets/icons/014-drop.svg"),
    require("@/assets/icons/013-wind.svg"),
    require("@/assets/icons/015-cloud.svg"),
  ];
}
</script>
