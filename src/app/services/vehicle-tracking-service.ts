import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigService } from '../shared/config-service';
import { Configuration } from '../shared/configuration';
@Injectable({
  providedIn: 'root'
})
export class VehicleTrackingService {
private configuration$: Configuration;
constructor(private http: HttpClient,private configService: ConfigService) { 
  this.configuration$ = this.configService.settings;
}

getVehicleTracking(){
  return this.http.post(this.configuration$.BaseUrl + "e-vision/api/Customer/GetAll",{});
}

}
