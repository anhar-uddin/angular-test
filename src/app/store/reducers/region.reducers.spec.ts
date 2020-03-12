import { regionReducers } from './region.reducer';
import { initialRegionState } from '../state/app.state';
import { GetCountries, ChangeRegionSelection } from '../actions/region.actions';

describe('Region reducer', () => {
    describe('default', () => {
        it('should return init state', () => {
            const newState = regionReducers(undefined, new GetCountries(''));
            expect(newState.regions.length).toEqual(2);
        });

        it('should return "Asia" isSelcted:true', () => {
            const newState = regionReducers(undefined, new ChangeRegionSelection('Asia'));
            expect(newState.regions[1].isSelected).toEqual(true);
        });
    });
});
