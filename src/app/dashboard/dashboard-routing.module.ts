import { NgModule, } from '@angular/core';
import { RouterModule } from "@angular/router";
import { adminGuard } from '../core/guards/admin.guard';






@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then((module) => module.HomeModule),
            },
            {
                path: 'users',
                canActivate: [adminGuard],
                loadChildren: () => import('./pages/users/users.module').then((module) => module.UsersModule),
            },
            {
                path: 'alumnos',
                loadChildren: () => import('./pages/alumnos/alumnos.module').then((module) => module.AlumnosModule),
            },
            {
                path: 'profesores',
                loadChildren: () => import('./pages/profesores/profesores.module').then((module) => module.ProfesoresModule),
            },
            {
                path: 'cursos',
                loadChildren: () => import('./pages/cursos/cursos.module').then((module) => module.CursosModule),
            },
            {
                path: 'clases',
                loadChildren: () => import('./pages/clases/clases.module').then((module) => module.ClasesModule),
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ])],
        exports: [RouterModule]

})
export class DashboardRoutingModule{}