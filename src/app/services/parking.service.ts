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
            .setRelated(['employees']);

        return CompanyStore.find<Company>(queryBuilder).then(results => {
            if (results && results.length) {
                return results[0];
            }
            return null;
        });
    }

    public addMemberToCompany(memberEmail: string): Promise<void> {
        // TODO: Implement this!
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1500, false);
        });
    }

    public createParkingLot(company: Company, lot: ParkingLot): Promise<void> {
        // TODO: Implement this!
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1500, false);
        });
    }
}
