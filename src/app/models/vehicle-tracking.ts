import { VehicleStatus } from '../enum/vehicle-status';

export class VehicleTracking{
    vehicleId : number;
    vehicleVIN: string;
    customerId: number;
    customerName: string;
    status: VehicleStatus;
}