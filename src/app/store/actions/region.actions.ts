import { Action } from '@ngrx/store';
import { Region } from '../state/app.state';

export enum ERegionActions {
    GetRegion = '[Region] Get Region',
    ChangeRegionSelection = '[Region] Change Region Selection',
    GetCountries = '[Region] Get Countries For Region',
    GetCountriesSuccess = '[Region] Get Countries For Region Success',

}

export class GetRegion implements Action {
    readonly type = ERegionActions.GetRegion;
    constructor() { }
}

export class ChangeRegionSelection implements Action {
    readonly type = ERegionActions.ChangeRegionSelection;
    constructor(public payload: string) { }
}

export class GetCountries implements Action {
    readonly type = ERegionActions.GetCountries;
    constructor(public payload: string) { }
}

export class GetCountriesSuccess implements Action {
    readonly type = ERegionActions.GetCountriesSuccess;
    constructor(public payload: any) { }
}

export type RegionActions = GetRegion | ChangeRegionSelection | GetCountries | GetCountriesSuccess;
