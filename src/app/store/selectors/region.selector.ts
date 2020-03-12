import { createSelector } from '@ngrx/store';

import { AppState, RegionState } from '../state/app.state';

const configState = (state: AppState) => {
    return state.regions;
};

export const selectRegions = createSelector(
  configState,
  (state: RegionState) => state.regions
);
