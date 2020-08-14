import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import KEY from './config/location.config';
import fetchHelper from './../helpers/fetch.helper';
import ILocation from '../../../shared/interfaces/location.interface';

@Injectable()
export class LocationService {
  public async getLocation(ip: string) {
    try {
      const location: ILocation = await fetchHelper(
        `http://api.ipstack.com/${ip}?access_key=${KEY}`,
      );
      return location;
    } catch (err) {
      console.error(`Location + IP Service Error: ${err}`);
      throw new ServiceUnavailableException("Unable to get user's location");
    }
  }
}
