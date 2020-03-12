import { RouterReducerState } from '@ngrx/router-store';

export interface Region {
    name: string;
    countires?: [];
    isSelected?: boolean;
}

export interface RegionState {
    loading: boolean;
    regions: Region[];
}

export const initialRegionState: RegionState = {
    loading: false,
    regions: [{ name: 'Europe', countires: [], isSelected: false }, { name: 'Asia', countires: [], isSelected: false }]
};

export interface AppState {
    router?: RouterReducerState;
    regions: RegionState;
}

export const initialAppState: AppState = {
    regions: initialRegionState,
};

export function getInitialState(): AppState {
    return initialAppState;
}
