import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { RegionEffects } from './region.effects';
import { RegionService } from 'src/app/services/region.service';
import { GetCountries, GetCountriesSuccess } from '../actions/region.actions';
import { HttpClientModule } from '@angular/common/http';
import { EffectsRunner } from '@ngrx/effects/src/effects_runner';
import { of } from 'rxjs';

describe('TodoListEffects', () => {
    let actions: Observable<any>;
    let effects: RegionEffects;
    let regionService: jasmine.SpyObj<RegionService>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                RegionEffects,
                provideMockActions(() => actions),
                {
                    provide: RegionService,
                    useValue: jasmine.createSpyObj('regionService', ['getCountries'])
                }
            ]
        });
        effects = TestBed.get(RegionEffects);
        regionService = TestBed.get(RegionService);
    });

    // describe('getCountries', () => {
    //     it('should get countries', () => {
    //         const outcomeResponse = {
    //             region: 'Asia',
    //             countries: dummyResponse
    //         };
    //         const action = new GetCountries('Asia');
    //         const completion = new GetCountriesSuccess(outcomeResponse);
    //         regionService.getCountries.and.returnValue(of(outcomeResponse));
    //         actions = hot('-a', { a: action });
    //         const expected = cold('--b', { b: completion });

    //         expect(effects.getCountries$).toBeObservable(expected);
    //     });
    // });

    // tslint:disable-next-line: max-line-length
    const dummyResponse = [{ name: 'Afghanistan', topLevelDomain: ['.af'], alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: ['93'], capital: 'Kabul', altSpellings: ['AF', 'Afġānistān'], region: 'Asia', subregion: 'Southern Asia', population: 27657145, latlng: [33.0, 65.0], demonym: 'Afghan', area: 652230.0, gini: 27.8, timezones: ['UTC+04:30'], borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'], nativeName: 'افغانستان', numericCode: '004', currencies: [{ code: 'AFN', name: 'Afghan afghani', symbol: '؋' }], languages: [{ iso639_1: 'ps', iso639_2: 'pus', name: 'Pashto', nativeName: 'پښتو' }, { iso639_1: 'uz', iso639_2: 'uzb', name: 'Uzbek', nativeName: 'Oʻzbek' }, { iso639_1: 'tk', iso639_2: 'tuk', name: 'Turkmen', nativeName: 'Türkmen' }], translations: { de: 'Afghanistan', es: 'Afganistán', fr: 'Afghanistan', ja: 'アフガニスタン', it: 'Afghanistan', br: 'Afeganistão', pt: 'Afeganistão', nl: 'Afghanistan', hr: 'Afganistan', fa: 'افغانستان' }, flag: 'https://restcountries.eu/data/afg.svg', regionalBlocs: [{ acronym: 'SAARC', name: 'South Asian Association for Regional Cooperation', otherAcronyms: [], otherNames: [] }], cioc: 'AFG' }, { name: 'Armenia', topLevelDomain: ['.am'], alpha2Code: 'AM', alpha3Code: 'ARM', callingCodes: ['374'], capital: 'Yerevan', altSpellings: ['AM', 'Hayastan', 'Republic of Armenia', 'Հայաստանի Հանրապետություն'], region: 'Asia', subregion: 'Western Asia', population: 2994400, latlng: [40.0, 45.0], demonym: 'Armenian', area: 29743.0, gini: 30.9, timezones: ['UTC+04:00'], borders: ['AZE', 'GEO', 'IRN', 'TUR'], nativeName: 'Հայաստան', numericCode: '051', currencies: [{ code: 'AMD', name: 'Armenian dram', symbol: null }], languages: [{ iso639_1: 'hy', iso639_2: 'hye', name: 'Armenian', nativeName: 'Հայերեն' }, { iso639_1: 'ru', iso639_2: 'rus', name: 'Russian', nativeName: 'Русский' }], translations: { de: 'Armenien', es: 'Armenia', fr: 'Arménie', ja: 'アルメニア', it: 'Armenia', br: 'Armênia', pt: 'Arménia', nl: 'Armenië', hr: 'Armenija', fa: 'ارمنستان' }, flag: 'https://restcountries.eu/data/arm.svg', regionalBlocs: [{ acronym: 'EEU', name: 'Eurasian Economic Union', otherAcronyms: ['EAEU'], otherNames: [] }], cioc: 'ARM' }];
});

