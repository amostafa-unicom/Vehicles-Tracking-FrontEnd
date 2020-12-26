import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleTrackingModule } from './modules/vehicle-tracking-module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/vehicle-tracking-module').then((m) => m.VehicleTrackingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
