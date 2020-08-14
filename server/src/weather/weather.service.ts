import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { LocationService } from '../location/location.service';
import KEY from './config/weather.config';
import fetchHelper from '../helpers/fetch.helper';
import ILocation from '../../../shared/interfaces/location.interface';
import Coordinate from '../../../shared/interfaces/coordinate.interface';
import IWeather from '../../../shared/interfaces/weather.interface';
import IForecast from '../../../shared/interfaces/forecast.interface';

@Injectable()
export class WeatherService {
  constructor(private readonly locationService: LocationService) {}

  public async getAllData(ip: string) {
    try {
      const location: ILocation = await this.locationService.getLocation(ip);
      const coordinate: Coordinate = {
        lat: location.latitude,
        lon: location.longitude,
      };
      const [weather, forecast] = await Promise.all([
        this.getWeatherByCoord(coordinate),
        this.getForecast(coordinate),
      ]);
      return { weather, forecast, location };
    } catch (err) {
      console.error(`Weather + Location + Forecast Error: ${err}`);
      throw new ServiceUnavailableException(
        'Unable to get weather, forecat, or location data',
      );
    }
  }

  private async getWeatherByCoord({ lat, lon }: Coordinate) {
    try {
      const weather: IWeather = await fetchHelper(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${KEY}`,
      );
      return weather;
    } catch (err) {
      console.error(`Weather Service Error: ${err}`);
      throw new ServiceUnavailableException('Weather API unavailable');
    }
  }

  private async getWeatherByCity(city: string) {
    try {
      const weather: IWeather = await fetchHelper(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${KEY}`,
      );
      return weather;
    } catch (err) {
      console.error(`Weather Service Error: ${err}`);
      throw new ServiceUnavailableException('Weather API unavailable');
    }
  }

  private async getForecast({ lat, lon }: Coordinate) {
    try {
      const forecast: IForecast = await fetchHelper(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly&appid=${KEY}`,
      );
      return forecast;
    } catch (err) {
      console.error(`Forecast Service Error: ${err}`);
      throw new ServiceUnavailableException('Forecast API unavailable');
    }
  }
}
