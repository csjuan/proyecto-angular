import { NgModule, } from '@angular/core';
import { RouterModule } from "@angular/router";




@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then((module) => module.HomeModule),
            },
            {
                path: 'users',
                loadChildren: () => import('./pages/users/users.module').then((module) => module.UsersModule),
            },
            {
                path: 'cursos',
                loadChildren: () => import('./pages/cursos/cursos.module').then((module) => module.CursosModule),
            },
            {
                path: 'profesores',
                loadChildren: () => import('./pages/profesores/profesores.module').then((module) => module.ProfesoresModule),
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ])],
        exports: [RouterModule]

})
export class DashboardRoutingModule{}