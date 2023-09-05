import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { alumnos } from './componentes/modelos';
import { Observable, map } from 'rxjs';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CrearAlumnoComponent } from './componentes/crear-alumno/crear-alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
    public alumno: Observable<alumnos[]>;
    

    constructor (   private matDialog: MatDialog,
        private alumnoService: AlumnosService,
       
   ) {
    
    this.alumnoService.cargarAlumno();
    this.alumno = this.alumnoService.getAlumno().pipe(
        map((v) => v .map((alumno) => 
        ({...alumno, name: alumno.name.toUpperCase(),
        apellido: alumno.apellido.toUpperCase(),
        direccion: alumno.direccion,
    })))
    );
   }
   crearAlumno(): void {
   this.matDialog.open(CrearAlumnoComponent).afterClosed().subscribe({
    next: (valor) => {
        if (valor) {
           this.alumnoService.crearUsuario({
                    name: valor.name,
                    apellido: valor.apellido,
                    direccion: valor.direccion,
                    email: valor.email,
                    password: valor.password,
           })
    }
        },       
   });
   } 
   borrarAlumno(borrarAlumno: alumnos): void {
    if(confirm(`desea eliminar a ${borrarAlumno.name}?`)){
      this.alumnoService.BorrarAlumno(borrarAlumno.id);
    }
}
    editarAlumno(editarAlumno: alumnos): void{
      this.matDialog.open(CrearAlumnoComponent , {data: editarAlumno}).afterClosed().subscribe({
           next: (alumnoeditado) => {
              if (alumnoeditado) {
                this.alumnoService.EditAlumno(editarAlumno.id, alumnoeditado)
              }
            },       
          });
   }

}
