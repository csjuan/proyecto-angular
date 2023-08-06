import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { RouterModule } from '@angular/router';
import { CursosModule } from './pages/cursos/cursos.module';






@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    CursosModule,
    ProfesoresModule,
    RouterModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
