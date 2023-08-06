import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { ProfesoresComponent } from './dashboard/pages/profesores/profesores.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'users',
            component: UsersComponent,
        },
        {
            path: 'cursos',
            component: CursosComponent,
        },
        {
            path: 'profesores',
            component: ProfesoresComponent,
        },
        {
            path: '**',
            redirectTo: 'home'
        },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path:'**',
    redirectTo: '/auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
