
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, mergeMap, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetRegion, ERegionActions, GetCountries, GetCountriesSuccess } from '../actions/region.actions';
import { RegionService } from 'src/app/services/region.service';



@Injectable()
export class RegionEffects {

  @Effect() getCountries$ = this.actions$
    .pipe(
      ofType<GetCountries>(ERegionActions.GetCountries),
      exhaustMap((data) => this.regionService.getCountries(data.payload)),
      map((result) => new GetCountriesSuccess(result))
    );

  constructor(
    private regionService: RegionService,
    private actions$: Actions) { }
}
