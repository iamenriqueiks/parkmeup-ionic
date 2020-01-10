import {ParkingLot} from './remote';

export interface ParkingStatusEntry {
    parkingLot: ParkingLot;
    allocatedFor: Backendless.User;
}
