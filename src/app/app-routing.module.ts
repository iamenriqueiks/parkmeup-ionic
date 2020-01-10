import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {PublicGuard} from './guards/public.guard';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule), canActivate: [AuthenticatedGuard]},
    {path: 'public', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicPageModule), canActivate: [PublicGuard]},
  {
    path: 'crear-empresa',
    loadChildren: () => import('./pages/crear-empresa/crear-empresa.module').then( m => m.CrearEmpresaPageModule)},
  {    
    path: 'lista-empresas',
    loadChildren: () => import('./pages/lista-empresas/lista-empresas.module').then( m => m.ListaEmpresasPageModule)

  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
