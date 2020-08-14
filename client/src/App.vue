<template>
  <div id="app" class="flex h-screen justify-center items-center relative">
    <WeatherComponent />
    <div class="bg absolute"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WeatherComponent from "@/components/Weather.component.vue";
import LoadingComponent from "@/components/Loading.component.vue";

@Component({
  components: { WeatherComponent, LoadingComponent },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

#app {
  font-family: $primary-font;
}

.bg {
  width: 100%;
  height: 100%;
  top: 50%;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
}
</style>
