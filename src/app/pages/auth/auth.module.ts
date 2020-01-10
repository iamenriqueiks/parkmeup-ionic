import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthPageRoutingModule} from './auth-routing.module';

import {AuthPage} from './auth.page';
import { PublicPage } from '../public/public.page';
import { PublicPageModule } from '../public/public.module';

@NgModule({
    entryComponents: [
        PublicPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule,
        PublicPageModule
    ],
    declarations: [AuthPage]
})
export class AuthPageModule {
}
