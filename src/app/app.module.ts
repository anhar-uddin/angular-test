import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './services/api.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/effects/region.effects';
import { CountryDetailsModule } from './components/country-details/country-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CountryDetailsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([RegionEffects]),
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
