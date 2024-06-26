import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../services/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {
  public regions: Country[] = [];

  public validRegions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.regions = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService
      .searchRegionService(region)
      .subscribe((reg) => (this.regions = reg));
  }
}
