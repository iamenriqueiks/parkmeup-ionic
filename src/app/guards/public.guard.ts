import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate {
    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isUserAuthenticated = this.authenticationService.isUserAuthenticated();

        if (!isUserAuthenticated) {
            return true;
        }

        this.router.navigate(['/auth']);
        return false;
    }
}
