import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { TablaCursoComponent } from './tabla-curso/tabla-curso.component';
import { CursosRountingModule } from './cursos-routing.module';




@NgModule({
  declarations: [
    CursosComponent,
    CrearCursoComponent,
    TablaCursoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRountingModule, 
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
