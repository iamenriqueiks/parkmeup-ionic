import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PublicPage} from './public.page';

const routes: Routes = [
    {
        path: '',
        component: PublicPage,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicPageRoutingModule {
}
