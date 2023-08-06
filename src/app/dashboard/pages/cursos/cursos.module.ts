import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { TablaCursoComponent } from './tabla-curso/tabla-curso.component';




@NgModule({
  declarations: [
    CursosComponent,
    CrearCursoComponent,
    TablaCursoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
