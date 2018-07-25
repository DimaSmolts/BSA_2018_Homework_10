import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightEntityComponent } from './flight-entity/flight-entity.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {HttpModule, Http} from '@angular/http';
import { PlaneTypeListComponent } from './plane-type-list/plane-type-list.component';
import { PlaneTypeEntityComponent } from './plane-type-entity/plane-type-entity.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotEntityComponent } from './pilot-entity/pilot-entity.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';
import { StewardessEntityComponent } from './stewardess-entity/stewardess-entity.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { PlaneEntityComponent } from './plane-entity/plane-entity.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightEntityComponent,
    FlightListComponent,
    PlaneTypeListComponent,
    PlaneTypeEntityComponent,
    PilotListComponent,
    PilotEntityComponent,
    StewardessListComponent,
    StewardessEntityComponent,
    PlaneListComponent,
    PlaneEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
