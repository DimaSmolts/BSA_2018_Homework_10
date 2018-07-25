import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightEntityComponent } from './flight-entity/flight-entity.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { PlaneTypeListComponent } from './plane-type-list/plane-type-list.component';
import { PlaneTypeEntityComponent } from './plane-type-entity/plane-type-entity.component';


const routes: Routes = [
  {path: 'flights', component: FlightListComponent},
  {path: 'flights/:id', component: FlightEntityComponent},
  {path: 'planetypes', component: PlaneTypeListComponent},
  {path: 'planetypes/:id', component: PlaneTypeEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
