import { Component } from '@angular/core';
import { MatDialog,  } from '@angular/material/dialog';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CursosService } from 'src/app/core/services/cursos.service';
import { Observable, map } from 'rxjs';
import { cursos } from '.';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
    public cursos: Observable<cursos[]>;



    constructor(
        private MatDialog: MatDialog,
        private cursosService: CursosService
    ) {
        this.cursosService.cargarProfesor();
        this.cursos = this.cursosService.getcurso().pipe(
            map((v) => v .map((cursos) => 
        ({...cursos, curso: cursos.curso.toUpperCase(),
        duracion: cursos.duracion.toUpperCase(),
        dificultad: cursos.dificultad,
    })))
    );
    }

    crearCurso(): void {
     this.MatDialog.open(CrearCursoComponent).afterClosed().subscribe({
        next: (v) => {
            this.cursosService.crearCurso({
                curso: v.cursos,
                duracion: v.duracion,
                dificultad: v.dificultad,      
       })
        },
     });
             
     } 
     borrarCurso(borrarCurso: cursos): void {
        if(confirm(`desea eliminar a ${borrarCurso.curso}?`)){
          this.cursosService.BorrarCurso(borrarCurso.id) ;
        }
    }
        editarCurso(editarCurso: cursos): void{
          this.MatDialog.open(CrearCursoComponent , {data: editarCurso}).afterClosed().subscribe({
               next: (cursoeditado) => {
                  if (cursoeditado) {
                    this.cursosService.EditCurso(editarCurso.id, cursoeditado)
                  }
                },       
              });
       }
   
}
    

