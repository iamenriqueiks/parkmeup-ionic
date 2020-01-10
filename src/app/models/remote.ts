export interface Company extends Backendless.DataItemI {
    address: string;
    createdBy: Backendless.User;
    employees: Backendless.User[];
    name: string;
    parkingLots: ParkingLot[];
    phoneNumber: string;
}

export interface ParkingLot extends Backendless.DataItemI {
    description: string;
    identifier: string;
}

export interface ParkingLotAllocation extends Backendless.DataItemI {
    allocatedFor: Backendless.User;
    startDate: string | Date;
    endDate: string | Date;
    parkingLot: ParkingLot;
}
