type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength;
};

export default interface IForecast {
  readonly daily: Tuple<IForecastDaily, 8>;
  readonly lat: number;
  readonly lon: number;
  readonly timezone: string;
  readonly timezone_offset: number;
}

interface IForecastDaily {
  readonly clouds: number;
  readonly dew_point: number;
  readonly dt: number;
  readonly feels_like: IForecastFeelsLike;
  readonly humidity: number;
  readonly pop: number;
  readonly pressure: number;
  readonly rain: number;
  readonly sunrise: Date;
  readonly sunset: Date;
  readonly temp: IForecastTemperature;
  readonly uvi: number;
  readonly weather: IForecastWeather[];
  readonly wind_deg: number;
  readonly wind_speed: number;
}

interface IForecastFeelsLike {
  readonly day: number;
  readonly eve: number;
  readonly morn: number;
  readonly night: number;
}

interface IForecastTemperature {
  readonly day: number;
  readonly eve: number;
  readonly max: number;
  readonly min: number;
  readonly morn: number;
  readonly night: number;
}

interface IForecastWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
