<template>
  <section
    :class="{fadeout:!isLoading}"
    class="loading text-gray-200 w-full text-center absolute overflow-hidden z-20 flex justify-center items-center"
  >
    <img class :src="sunAnimIcon" alt="Loading" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { sunAnimIcon } from "../helpers/icon.helper";

@Component({
  components: {},
})
export default class LoadingComponent extends Vue {
  @Prop({ default: true })
  isLoading!: boolean;
  private sunAnimIcon = sunAnimIcon;
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.loading {
  top: 50%;
  left: 50%;
  background: $app-bg;
  transform: translate(-50%, -50%);
}

.fadeout {
  animation: fadeout 1s forwards ease-out;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
