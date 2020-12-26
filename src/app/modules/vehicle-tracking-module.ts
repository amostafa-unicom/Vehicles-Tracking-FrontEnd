import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTrackingComponent } from './vehicle-tracking/vehicle-tracking.component';
import { VehicleTrackingRoutingModule } from './vehicle-tracking-routing.module';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
    declarations: [VehicleTrackingComponent],
    imports: [
        CommonModule,
        VehicleTrackingRoutingModule,
        MatTableModule
    ]
})
export class VehicleTrackingModule { }