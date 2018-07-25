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
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEntityComponent } from './ticket-entity/ticket-entity.component';
import { TakeOffListComponent } from './take-off-list/take-off-list.component';
import { TakeOffEntityComponent } from './take-off-entity/take-off-entity.component';


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
    PlaneEntityComponent,
    TicketListComponent,
    TicketEntityComponent,
    TakeOffListComponent,
    TakeOffEntityComponent
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
