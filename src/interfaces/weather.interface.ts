export default interface IWeather {
  base: string;
  clouds: IWeatherClouds;
  coord: IWeatherCoordinate;
  dt: number;
  id: number;
  main: IWeatherMain;
  rain?: IWeatherRain;
  sys: IWeatherSys;
  weather: IWeatherConditions[];
  wind: IWeatherWind;
}
// City exact coordinates
interface IWeatherCoordinate {
  lon: number;
  lat: number;
}

interface IWeatherClouds {
  // Cloudiness percentage
  all: number;
}

interface IWeatherMain {
  // Exact temperature
  temp: number;
  // Minimum temperature
  temp_min: number;
  // Maximum temperature
  temp_max: number;
  // Human perception of weather, based on humidity and temperature
  feels_like: number;
  // Atmospheric pressure
  pressure: number;
  // Humidity percentage
  humidity: number;
}

interface IWeatherSys {
  country: string;
  id: number;
  sunrise: Date;
  sunset: Date;
  type: number;
}

interface IWeatherRain {
  // Rain volume for last hour, in mm
  "1h": number;
  // Rain volume for last 3 hours, in mm
  "3h": number;
}

interface IWeatherSnow {
  // Snow volume for last hour, in mm
  "1h": number;
  // Rain volume for last 3 hours, in mm
  "3h": number;
}

interface IWeatherConditions {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWeatherWind {
  // Wind direction, in degrees
  deg: number;
  gust: number;
  speed: number;
}
