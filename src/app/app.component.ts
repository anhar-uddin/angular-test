import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, Region } from './store/state/app.state';
import { GetRegion, ChangeRegionSelection, GetCountries } from './store/actions/region.actions';
import { selectRegions } from './store/selectors/region.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  region$: Observable<Region[]>;
  selectedRegion: Region;
  selectedCountry;
  showCountryDetails: boolean;
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.region$ = this._store.select(selectRegions);
    this.region$.subscribe(regions => {
      regions.forEach(region => {
        if (region.isSelected) {
          this.selectedRegion = region;
          if (!region.countires.length) {
            this._store.dispatch(new GetCountries(region.name));
          }
        }
      });
    });
  }

  onRegionChange(regionName) {
    this.showCountryDetails = false;
    this._store.dispatch(new ChangeRegionSelection(regionName));
  }

  onCountryChange(countryName) {
    this.showCountryDetails = false;
    const country: any[] = this.findCountry(countryName);
    if (country.length) {
      this.selectedCountry = country[0];
    }
  }

  findCountry(name) {
    return this.selectedRegion.countires.filter((country: any) => {
      if (country.name === name) {
        return country;
      }
    });
  }
}

