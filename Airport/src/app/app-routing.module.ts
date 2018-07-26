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
import { TakeOffListComponent } from './take-off-list/take-off-list.component';
import { TakeOffEntityComponent } from './take-off-entity/take-off-entity.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewEntityComponent } from './crew-entity/crew-entity.component';
import { PlaneTypeEditComponent } from './plane-type-edit/plane-type-edit.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PilotEditComponent } from './pilot-edit/pilot-edit.component';
import { StewardessEditComponent } from './stewardess-edit/stewardess-edit.component';
import { PlaneEditComponent } from './plane-edit/plane-edit.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';


const routes: Routes = [
  {path: 'flights', component: FlightListComponent},
  {path: 'flights/edit/:id', component: FlightEditComponent},
  {path: 'flights/:id', component: FlightEntityComponent},
  {path: 'planetypes', component: PlaneTypeListComponent},
  {path: 'planetypes/edit/:id', component: PlaneTypeEditComponent},
  {path: 'planetypes/:id', component: PlaneTypeEntityComponent},
  {path: 'pilots', component: PilotListComponent},
  {path: 'pilots/edit/:id', component: PilotEditComponent},
  {path: 'pilots/:id', component: PilotEntityComponent},
  {path: 'stewardesses', component: StewardessListComponent},
  {path: 'stewardesses/edit/:id', component: StewardessEditComponent},
  {path: 'stewardesses/:id', component: StewardessEntityComponent},
  {path: 'planes', component: PlaneListComponent},
  {path: 'planes/edit/:id', component: PlaneEditComponent},
  {path: 'planes/:id', component: PlaneEntityComponent},
  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/edit/:id', component: TicketEditComponent},
  {path: 'tickets/:id', component: TicketEntityComponent},
  {path: 'takeoffs', component: TakeOffListComponent},
  {path: 'takeoffs/:id', component: TakeOffEntityComponent},
  {path: 'crews', component: CrewListComponent},
  {path: 'crews/:id', component: CrewEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
