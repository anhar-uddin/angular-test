import { Store } from '@ngrx/store';
import { GetRegion, ChangeRegionSelection, GetCountries } from '../actions/region.actions';
import { RegionState } from '../state/app.state';

describe('Region actions', () => {
    describe('ChangeRegionSelection', () => {
        it('should dispatch Change Region Selection', () => {
            const expectedAction = new ChangeRegionSelection('Asia');
            const store = jasmine.createSpyObj<Store<RegionState>>('store', ['dispatch']);

            store.dispatch(new ChangeRegionSelection('Asia'));

            expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});