import { Region } from '../services/region.type';
import { Country } from './countries';

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region: Region;
  countries: Country[];
}
