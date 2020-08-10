<template>
  <section class="date flex flex-col justify-center items-center text-gray-200 font-light">
    <span>{{getFormattedDate()}}; {{time}}</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ILocation from "@/interfaces/location.interface";
import { getFormattedDate, getFormattedTime } from "@/helpers/date.helper";

@Component({})
export default class DateComponent extends Vue {
  private getFormattedDate = getFormattedDate;
  private interval: number | undefined;
  private time: string | null = null;

  created() {
    this.time = getFormattedTime();
    this.interval = setInterval(() => (this.time = getFormattedTime()), 1000);
  }

  destroyed() {
    clearInterval(this.interval);
  }
}
</script>
