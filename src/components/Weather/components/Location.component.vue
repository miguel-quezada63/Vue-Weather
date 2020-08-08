<template>
  <section v-if="location" class="location flex justify-center items-center">
    <div class="flex items-center">
      <img class="w-6" :src="icon" alt="Location" />
      <span class="text-gray-200 ml-2"
        >{{ location.city }}, {{ location.region_name }}</span
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ILocation from "@/interfaces/location.interface";

@Component({})
export default class Location extends Vue {
  @Prop({ default: null })
  public location!: ILocation | null;
  private icon = require("@/assets/icons/pin.svg");
}
</script>
