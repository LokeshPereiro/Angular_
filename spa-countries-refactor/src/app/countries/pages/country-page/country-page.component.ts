import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.activatedRoute.params
  //   .subscribe(({ id }) =>
  //     this.countriesService
  //       .searchCountryByAlphaCode(id)
  //       .subscribe((country) => {
  //         country;
  //       })
  //   );
  // }

  ngOnInit(): void {
    // Observable Hell
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCodeService(id)
        )
      )
      .subscribe((country) => {
        // console.log(country);
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return (this.country = country);
      });
  }
}
