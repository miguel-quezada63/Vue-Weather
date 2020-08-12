import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LocationService } from '../location/location.service';

@Module({
  controllers: [WeatherController],
  providers: [LocationService, WeatherService],
})
export class WeatherModule {}
