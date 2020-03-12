import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RegionService {

    constructor(private apiService: APIService) { }

    getCountries(region) {
        return this.apiService.get('region/' + region, '', 'https://restcountries.eu/rest/v2/').pipe(
            map(results => {
                return {
                    region,
                    countries: results
                };
            }));
    }
}
