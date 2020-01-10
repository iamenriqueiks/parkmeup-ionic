import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Company } from 'src/app/models/remote';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    public user: Backendless.User;
    public companias: Company[];

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private menu: MenuController, private parkingService: ParkingService) {
    }

    ngOnInit() {
        this.authenticationService.getCurrentUser().then((user:Backendless.User) => {
            this.user = user;
            console.log(this.user.username);
        });

        this.parkingService.getCompaniesIBelongTo().then((a:Company[])=>{
            this.companias=a;
        });
    }

    logOut() {
        this.authenticationService.logOut().then(() => {
            return this.router.navigate(['public']);
        });
    }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    openEnd() {
        this.menu.open('end');
    }

    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }

    toggleMenu() {
        this.menu.toggle();
    }

    AddCompany() {
        
    }
}
