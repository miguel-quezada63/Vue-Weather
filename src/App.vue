<template>
  <div id="app" class="flex h-screen justify-center items-center">
    <Weather />
    <div class="bg absolute"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Weather from "./components/Weather/Weather.component.vue";

@Component({
  components: { Weather },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
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
