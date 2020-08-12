import IWeather from "@/interfaces/weather.interface";
import IForecast from "@/interfaces/forecast.interface";

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
    setWeather({ commit }: { commit: any }, weather: IWeather) {
      commit(MutationTypes.SET_WEATHER, weather);
    },

    setForecast({ commit }: { commit: any }, forecast: IForecast) {
      commit(MutationTypes.SET_FORECAST, forecast);
    },
  },
};
