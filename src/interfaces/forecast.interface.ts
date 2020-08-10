export default interface IForecast {
  daily: IForecastDaily[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

interface IForecastDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IForecastFeelsLike;
  humidity: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: Date;
  sunset: Date;
  temp: IForecastTemperature;
  uvi: number;
  weather: IForecastWeather[];
  wind_deg: number;
  wind_speed: number;
}

interface IForecastFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface IForecastTemperature {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

interface IForecastWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
