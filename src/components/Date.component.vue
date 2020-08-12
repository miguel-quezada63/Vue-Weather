<template>
  <section class="date flex flex-col justify-center items-center text-gray-200 font-light">
    <span>{{date}}; {{time}}</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Interfaces
import ILocation from "@/interfaces/location.interface";
// Helpers
import { getFormattedDate, getFormattedTime } from "@/helpers/date.helper";

@Component({})
export default class DateComponent extends Vue {
  // Interval used to refresh date each second
  private interval: number | undefined;
  // Current time and date, properties created in order to be reactive
  private time: string | null = null;
  private date: string | null = null;

  created() {
    // Get initial date and time
    this.date = getFormattedDate();
    this.time = getFormattedTime();
    this.interval = setInterval(() => {
      // Refresh time each second
      this.time = getFormattedTime();
      // If time is 12AM, refresh date property so that the date changes
      this.time === "12AM" && (this.date = getFormattedDate());
    }, 1000);
  }

  destroyed() {
    // Once component is destroyed, clear the date/time interval
    clearInterval(this.interval);
  }
}
</script>
