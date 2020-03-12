import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { RegionActions, ERegionActions } from '../actions/region.actions';
import { initialRegionState, RegionState } from '../state/app.state';


export const regionReducers = (state: RegionState = initialRegionState, action: RegionActions): RegionState => {
    switch (action.type) {
        case ERegionActions.ChangeRegionSelection:
            return {
                ...state,
                regions: state.regions.filter((region) => {
                    if (region.name === action.payload) {
                        region.isSelected = true;
                    } else {
                        region.isSelected = false;
                    }
                    return region;
                })
            };
        case ERegionActions.GetCountries:
            return {
                ...state,
                loading: true
            };
        case ERegionActions.GetCountriesSuccess:
            return {
                ...state,
                regions: state.regions.filter((region) => {
                    if (region.name === action.payload.region) {
                        region.countires = action.payload.countries;
                    }
                    return region;
                }),
                loading: false
            };
        default:
            return state;
    }
};

