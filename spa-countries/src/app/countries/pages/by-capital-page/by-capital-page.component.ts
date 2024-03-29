import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    // console.log('desde capital component!');
    // console.log({ term });
    this.countriesService
      .searchCapital(term)
      .subscribe((paises) => (this.countries = paises));
  }
}
