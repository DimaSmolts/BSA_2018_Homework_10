import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightEntityComponent } from './flight-entity/flight-entity.component';
import { FlightListComponent } from './flight-list/flight-list.component';
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


const routes: Routes = [
  {path: 'flights', component: FlightListComponent},
  {path: 'flights/:id', component: FlightEntityComponent},
  {path: 'planetypes', component: PlaneTypeListComponent},
  {path: 'planetypes/:id', component: PlaneTypeEntityComponent},
  {path: 'pilots', component: PilotListComponent},
  {path: 'pilots/:id', component: PilotEntityComponent},
  {path: 'stewardesses', component: StewardessListComponent},
  {path: 'stewardesses/:id', component: StewardessEntityComponent},
  {path: 'planes', component: PlaneListComponent},
  {path: 'planes/:id', component: PlaneEntityComponent},
  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/:id', component: TicketEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
