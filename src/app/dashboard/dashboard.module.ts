import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { RouterModule } from '@angular/router';
import { CursosModule } from './pages/cursos/cursos.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { ClasesModule } from './pages/clases/clases.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    CursosModule,
    AlumnosModule,
    ClasesModule,
    ProfesoresModule,
    HomeModule,
    RouterModule,
    DashboardRoutingModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
