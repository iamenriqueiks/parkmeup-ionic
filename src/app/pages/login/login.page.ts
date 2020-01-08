import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string;
    password: string;
    isLoading = false;

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                private toastController: ToastController) {
    }

    ngOnInit() {
    }

    get canSubmitLogin(): boolean {
        return !!this.email && !!this.password && !this.isLoading;
    }

    submitLogIn() {
        if (!this.canSubmitLogin) {
            return;
        }

        this.isLoading = true;
        this.authenticationService.logIn(this.email, this.password).then((success) => {
            this.isLoading = false;
            if (success) {
                this.router.navigate(['/auth']);
            } else {
                this.showToast('Credenciales incorrectas o usuario no existe.');
            }
        }).catch(error => {
            this.isLoading = false;
            console.error('[ LogIn ] An error occurred submitting form: ', error);
        });
    }

    private async showToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        return toast.present();
    }
}
