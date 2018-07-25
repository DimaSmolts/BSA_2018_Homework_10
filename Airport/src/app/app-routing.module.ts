import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightEntityComponent } from './flight-entity/flight-entity.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { PlaneTypeListComponent } from './plane-type-list/plane-type-list.component';
import { PlaneTypeEntityComponent } from './plane-type-entity/plane-type-entity.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotEntityComponent } from './pilot-entity/pilot-entity.component';


const routes: Routes = [
  {path: 'flights', component: FlightListComponent},
  {path: 'flights/:id', component: FlightEntityComponent},
  {path: 'planetypes', component: PlaneTypeListComponent},
  {path: 'planetypes/:id', component: PlaneTypeEntityComponent},
  {path: 'pilots', component: PilotListComponent},
  {path: 'pilots/:id', component: PilotEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
