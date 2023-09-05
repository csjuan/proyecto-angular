import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { CrearAlumnoComponent } from './componentes/crear-alumno/crear-alumno.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { DetalleComponents } from './componentes/detalle/detalle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosRountingModule } from './alumnos-routing.module';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AlumnosComponent,
    CrearAlumnoComponent,
    TablaComponent,
    DetalleComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    AlumnosRountingModule,
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule { }
