<template>
  <section v-if="location" class="location flex justify-center items-center mt-4 font-bold text-xl">
    <div class="flex items-center">
      <img class="w-6" :src="pinIcon" alt="Location" />
      <span class="text-gray-200 ml-2">{{ location.city }}, {{ location.region_name }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Interfaces
import ILocation from "../../../shared/interfaces/location.interface";
// Helpers
import { getFormattedDate } from "@/helpers/date.helper";
import { pinIcon } from "@/helpers/icon.helper";

@Component({})
export default class LocationComponent extends Vue {
  @Prop({ default: null })
  public location!: ILocation | null;
  private pinIcon = pinIcon;
  private getFormattedDate = getFormattedDate;
}
</script>
