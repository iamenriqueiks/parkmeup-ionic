import {Injectable} from '@angular/core';
import {Company, ParkingLot} from '../models/remote';
import {AuthenticationService} from './authentication.service';

const CompanyStore = Backendless.Data.of('Companies');
const ParkingLotStore = Backendless.Data.of('ParkingLots');
const ParkingLotAllocationStore = Backendless.Data.of('ParkingLotAllocations');

@Injectable({
    providedIn: 'root'
})
export class ParkingService {

    constructor(private authenticationService: AuthenticationService) {
    }

    public getCompaniesIBelongTo(): Promise<Company[]> {
        return this.authenticationService.getCurrentUser().then(currentUser => {
            const queryBuilder = Backendless.DataQueryBuilder.create();
            queryBuilder
                .setWhereClause(`employees = '${currentUser.objectId}'`)
                .setRelated(['employees']);

            return CompanyStore.find<Company>(queryBuilder);
        });
    }

    public createCompany(company: Company): Promise<Company> {
        let currentUser: Backendless.User;
        let persistedCompanyObjectId;
        return this.authenticationService.getCurrentUser().then(user => {
            currentUser = user;
            return CompanyStore.save(company);
        }).then((persistedCompany: Company) => {
            persistedCompanyObjectId = persistedCompany.objectId;
            return CompanyStore.addRelation(persistedCompany, 'members', currentUser.objectId);
        }).then(() => {
            return this.getCompanyById(persistedCompanyObjectId);
        });
    }

    public getCompanyById(companyObjectId: string): Promise<Company> {
        const queryBuilder = Backendless.DataQueryBuilder.create();
        queryBuilder
            .setWhereClause(`objectId = '${companyObjectId}'`)
            .setRelated(['employees', 'parkingLots']);

        return CompanyStore.find<Company>(queryBuilder).then(results => {
            if (results && results.length) {
                return results[0];
            }
            return null;
        });
    }

    public addMemberToCompany(companyObjectId: string, memberEmail: string): Promise<any> {
        const UsersStore = Backendless.Data.of('Users');
        const queryBuilder = Backendless.DataQueryBuilder.create();
        queryBuilder.setWhereClause(`email = '${memberEmail}'`);

        let userToAdd: Backendless.User;
        return UsersStore.find(queryBuilder).then((result: Backendless.User[]) => {
            if (result && result.length) {
                userToAdd = result[0];
            }
            return CompanyStore.addRelation({objectId: companyObjectId}, 'employees', [userToAdd.objectId]);
        });
    }

    public createParkingLot(companyObjectId: string, lot: ParkingLot): Promise<ParkingLot> {
        let parkingLot: ParkingLot;
        return ParkingLotStore.save<ParkingLot>(lot).then(persistedParkingLot => {
            parkingLot = persistedParkingLot;
            return CompanyStore.addRelation({objectId: companyObjectId}, 'parkingLots', [persistedParkingLot.objectId]);
        }).then(() => {
            return parkingLot;
        });
    }
}
