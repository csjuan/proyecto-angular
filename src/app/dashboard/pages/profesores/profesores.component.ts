import { Component,  } from '@angular/core';
import { CrearProfesorComponent } from './crear-profesor/crear-profesor.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfesoresService } from 'src/app/core/services/profesores.service';
import { profesores } from '.';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selecAdmin } from 'src/app/store/auth/auth.selectors';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {
    public profesores: Observable<profesores[]>;
    public selecAdmin: Observable<boolean>;


    constructor(
        private MatDialog: MatDialog,
        private profesorsService: ProfesoresService,
        private store: Store,
    ) { 
        this.selecAdmin = this.store.select(selecAdmin);
        this.profesorsService.cargarProfesor();
        this.profesores = this.profesorsService.getProfesor().pipe(
            map((v) => v .map((profesores) => 
        ({...profesores, name: profesores.name.toUpperCase(),
                 apellido: profesores.apellido.toUpperCase(),
           
    }))) 
    );
        
    }

    crearProfe(): void {
      this.MatDialog.open(CrearProfesorComponent).afterClosed().subscribe({
        next: (v) => {
            this.profesorsService.crearProfesor({
                name: v.name,
                apellido: v.apellido,
                direccion: v.direccion,
                email: v.email,
                password: v.password,
       })
        },
     });
    }

    borrarprofesor(borrarProfesor: profesores): void {
        if(confirm(`desea eliminar a ${borrarProfesor.name}?`)){
          this.profesorsService.BorrarProfesor(borrarProfesor.id) ;
        }
    }
        editarProfesor(editarProfesor: profesores): void{
          this.MatDialog.open(CrearProfesorComponent , {data: editarProfesor}).afterClosed().subscribe({
               next: (profesoreditado) => {
                  if (profesoreditado) {
                    this.profesorsService.EditProfesor(editarProfesor.id, profesoreditado)
                  }
                },       
              });
       }
   
}
