import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearProfesorComponent } from './crear-profesor/crear-profesor.component';
import { TablaProfesorComponent } from './tabla-profesor/tabla-profesor.component';



@NgModule({
  declarations: [
    ProfesoresComponent,
    CrearProfesorComponent,
    TablaProfesorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProfesoresComponent
  ]
})
export class ProfesoresModule { }
