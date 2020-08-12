export default interface IWeather {
  readonly base: string;
  readonly clouds: IWeatherClouds;
  readonly coord: IWeatherCoordinate;
  readonly dt: number;
  readonly id: number;
  readonly main: IWeatherMain;
  readonly rain?: IWeatherRain;
  readonly sys: IWeatherSys;
  readonly weather: IWeatherConditions[];
  readonly wind: IWeatherWind;
}
// City coordinates
interface IWeatherCoordinate {
  readonly lon: number;
  readonly lat: number;
}

interface IWeatherClouds {
  // Cloudiness percentage
  readonly all: number;
}

interface IWeatherMain {
  // Exact temperature
  readonly temp: number;
  // Minimum temperature
  readonly temp_min: number;
  // Maximum temperature
  readonly temp_max: number;
  // Human perception of weather, based on humidity and temperature
  readonly feels_like: number;
  // Atmospheric pressure
  readonly pressure: number;
  // Humidity percentage
  readonly humidity: number;
}

interface IWeatherSys {
  readonly country: string;
  readonly id: number;
  readonly sunrise: Date;
  readonly sunset: Date;
  readonly type: number;
}

interface IWeatherRain {
  // Rain volume for last hour, in mm
  readonly "1h": number;
  // Rain volume for last 3 hours, in mm
  readonly "3h": number;
}

interface IWeatherSnow {
  // Snow volume for last hour, in mm
  readonly "1h": number;
  // Rain volume for last 3 hours, in mm
  readonly "3h": number;
}

interface IWeatherConditions {
  readonly description: string;
  readonly icon: string;
  readonly id: number;
  readonly main: string;
}

interface IWeatherWind {
  // Wind direction, in degrees
  readonly deg: number;
  readonly gust: number;
  readonly speed: number;
}
