import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user: Backendless.User = null;

    public isUserAuthenticated(): Promise<boolean> {
        return Backendless.UserService.isValidLogin();
    }

    public logIn(email: string, password: string): Promise<boolean> {
        return Backendless.UserService.login(email, password, true)
            .then((loggedInUser) => {
                this.user = loggedInUser;
                return true;
            })
            .catch((error) => {
                return false;
            });
    }

    public logOut(): Promise<void> {
        return Backendless.UserService.logout();
    }

    public getCurrentUser(): Promise<Backendless.User> {
        return Backendless.UserService.getCurrentUser();
    }
}
