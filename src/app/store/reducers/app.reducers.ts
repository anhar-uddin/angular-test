import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { regionReducers } from './region.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  regions: regionReducers
};
