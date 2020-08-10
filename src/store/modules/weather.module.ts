import IWeather from "@/interfaces/weather.interface";
import IForecast from "@/interfaces/forecast.interface";
import fetchHelper from "@/helpers/fetch.helper";
import { generateURLFromCity } from "@/helpers/endpoint.helper";
import { generateForecastURL } from "../../helpers/endpoint.helper";

interface IWeatherStateData {
  data: IForecast | IWeather | null;
  lastUpdated: number | null;
}

interface IWeatherState {
  forecast: IWeatherStateData;
  weather: IWeatherStateData;
}

enum MutationTypes {
  SET_WEATHER = "SET_WEATHER",
  SET_FORECAST = "SET_FORECAST",
}

export default {
  namespaced: true,
  state: {
    forecast: { data: null, lastUpdated: null },
    weather: { data: null, lastUpdated: null },
  } as IWeatherState,

  mutations: {
    SET_WEATHER(state: IWeatherState, weatherData: IWeather) {
      state.weather.data = weatherData;
      state.weather.lastUpdated = Date.now();
    },
    SET_FORECAST(state: IWeatherState, forecastData: IForecast) {
      state.forecast.data = forecastData;
      state.forecast.lastUpdated = Date.now();
    },
  },

  getters: {
    getWeather(state: IWeatherState) {
      return state.weather;
    },
    getForecast(state: IWeatherState) {
      return state.forecast;
    },
  },

  actions: {
    async setWeather({ commit }: { commit: any }, city: string) {
      try {
        const weather: IWeather = await fetchHelper(generateURLFromCity(city));
        commit(MutationTypes.SET_WEATHER, weather);
      } catch (err) {
        throw new Error(`WeatherModule API Error: ${err}`);
      }
    },

    async setForecast(
      { commit }: { commit: any },
      coordinates: { lat: number; lon: number }
    ) {
      try {
        const forecast: IForecast = await fetchHelper(
          generateForecastURL(coordinates)
        );
        commit(MutationTypes.SET_FORECAST, forecast);
      } catch (err) {
        throw new Error(`WeatherModule API Error: ${err}`);
      }
    },
  },
};
