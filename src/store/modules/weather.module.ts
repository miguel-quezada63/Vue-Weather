import IWeather from "@/interfaces/weather.interface";
import fetchHelper from "@/helpers/fetch.helper";
import { generateURLFromCity } from "@/helpers/endpoint.helper";

interface IWeatherState {
  weather: IWeather | null;
  lastUpdated: number | null;
}

export default {
  namespaced: true,
  state: { weather: null, lastUpdated: null } as IWeatherState,

  mutations: {
    SET_WEATHER(state: IWeatherState, weather: IWeather) {
      state.weather = weather;
      state.lastUpdated = Date.now();
    },
  },

  getters: {
    getWeather(state: IWeatherState) {
      return state.weather;
    },
  },

  actions: {
    async setWeather({ commit }: { commit: any }, city: string) {
      try {
        const weather: IWeather = await fetchHelper(generateURLFromCity(city));
        commit("SET_WEATHER", weather);
      } catch (err) {
        throw new Error(`WeatherModule API Error: ${err}`);
      }
    },
  },
};
