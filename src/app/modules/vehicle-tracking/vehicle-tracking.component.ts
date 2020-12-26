import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VehicleStatus } from 'src/app/enum/vehicle-status';
import { VehicleTrackingResponse } from 'src/app/models/vehicle-tracking-response';
import { VehicleTrackingService } from 'src/app/services/vehicle-tracking-service';

@Component({
  selector: 'app-vehicle-tracking',
  templateUrl: './vehicle-tracking.component.html',
  styleUrls: ['./vehicle-tracking.component.scss']
})
export class VehicleTrackingComponent implements OnInit, AfterViewInit {

  constructor(private vehicleTrackingService: VehicleTrackingService) { }

  //#region Fields
  dataSource: VehicleTrackingResponse;
  displayedColumns: string[] = ['CustomerName', 'VehiclePlateNumber', 'Status'];
  vehicleStatus = VehicleStatus;
  //#endregion
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this.vehicleTrackingService.getVehicleTracking().subscribe((res: any) => {
      this.dataSource = res.data;
      console.log("data : ", this.dataSource);

    }, error => {

    });
  }

}
