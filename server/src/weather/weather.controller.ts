import { Controller, Get, Query } from '@nestjs/common';
import Coordinate from './interfaces/coordinate.interface';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get('all')
  public async getAllData(@Query('ip') ip: string) {
    return this.weatherService.getAllData(ip);
  }
}
