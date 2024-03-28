import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public regions: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: string): void {
    this.countriesService
      .searchRegion(region)
      .subscribe((reg) => (this.regions = reg));
  }
}
