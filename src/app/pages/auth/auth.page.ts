import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private menu: MenuController) {
    }

    ngOnInit() {
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
}
