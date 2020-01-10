import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthPage} from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {path: '', redirectTo: 'lista-empresas', pathMatch: 'full'},
            {path: 'lista-empresas', loadChildren: () => import('../lista-empresas/lista-empresas.module').then( m => m.ListaEmpresasPageModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
