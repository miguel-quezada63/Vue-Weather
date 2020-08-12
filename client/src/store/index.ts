import Vue from "vue";
import Vuex from "vuex";
import LocationModule from "./modules/location.module";
import WeatherModule from "./modules/weather.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    LocationModule,
    WeatherModule,
  },
  strict: process.env.NODE_ENV !== "production",
});
