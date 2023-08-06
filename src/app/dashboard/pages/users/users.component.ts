import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersCrearUsuarioComponent } from './components/users-crear-usuario/users-crear-usuario.component';
import { alumnos } from './components/modelos/index';
import { UsersService } from 'src/app/core/services/users.service';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
   public alumnos: Observable<alumnos[]>;

    constructor (   private matDialog: MatDialog,
        private userService: UsersService
   ) {
    this.userService.cargarUsuarios();
    this.alumnos = this.userService.getAlumno().pipe(
        map((v) => v .map((alumnos) => 
        ({...alumnos, name: alumnos.name.toUpperCase(),
        apellido: alumnos.apellido.toUpperCase(),
        direccion: alumnos.direccion.toUpperCase(),
    })))
    );
   }
   crearUsers(): void {
   this.matDialog.open(UsersCrearUsuarioComponent).afterClosed().subscribe({
    next: (valor) => {
        if (valor) {
           this.userService.crearUsuario({
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
   borraralumno(borraralumno: alumnos): void {
    if(confirm(`desea eliminar a ${borraralumno.name}?`)){
      this.userService.BorrarUser(borraralumno.id) ;
    }
}
    editaralumno(editaralumno: alumnos): void{
      this.matDialog.open(UsersCrearUsuarioComponent , {data: editaralumno}).afterClosed().subscribe({
           next: (alumnoeditado) => {
              if (alumnoeditado) {
                this.userService.EditUser(editaralumno.id, alumnoeditado)
              }
            },       
          });
   }

}   

