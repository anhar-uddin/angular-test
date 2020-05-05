import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { CountryDetailsModule } from './components/country-details/country-details.module';
import { Store, StoreModule } from '@ngrx/store';
import { RegionState } from './store/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';
import { RegionEffects } from './store/effects/region.effects';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChangeRegionSelection, GetCountries } from './store/actions/region.actions';
import { regionReducers } from './store/reducers/region.reducer';

describe('AppComponent', () => {
  let store: Store<RegionState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        DropdownModule,
        CountryDetailsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([RegionEffects]),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('default', () => {
    it('should return init state', () => {
      const newState = regionReducers(undefined, new GetCountries(''));
      expect(newState.regions.length).toEqual(2);
    });
  });


  describe('Region reducer', () => {
    describe('default', () => {
      it('should return "Asia" isSelcted:true', () => {
        const newState = regionReducers(undefined, new ChangeRegionSelection('Asia'));
        expect(newState.regions[1].isSelected).toEqual(true);
      });
    });
  });


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

});
