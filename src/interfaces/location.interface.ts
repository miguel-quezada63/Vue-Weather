export default interface ILocation {
  // User IP address
  readonly ip: string;
  readonly type: string;
  readonly continent_code: string;
  readonly continent_name: string;
  readonly country_code: string;
  readonly country_name: string;
  readonly region_code: string;
  readonly region_name: string;
  readonly city: string;
  readonly zip: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly location: any;
  readonly country_flag: string;
  readonly country_flag_emoji: string;
  readonly country_flag_emoji_unicode: string;
  readonly calling_code: string;
  readonly is_eu: boolean;
}
