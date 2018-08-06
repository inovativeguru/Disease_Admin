import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SetlocationComponent } from './setlocation/setlocation.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetlocationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyD3Pxz8wa816EY5id0uRjA6WC0k2uLE7Ow',
      libraries: ["places"]
    }),
    Ng4GeoautocompleteModule.forRoot(),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
