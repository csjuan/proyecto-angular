import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersCrearUsuarioComponent } from './components/users-crear-usuario/users-crear-usuario.component';
import { UsersService } from 'src/app/core/services/users.service';
import { Observable, map } from 'rxjs';
import { user } from './components/modelos';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
   public usuarios: Observable<user[]>;

    constructor (   private matDialog: MatDialog,
        private userService: UsersService
   ) {
    this.userService.cargarUsuarios();
    this.usuarios = this.userService.getuser().pipe(
        map((v) => v .map((users) => 
        ({...users, name: users.name.toUpperCase(),
        apellido: users.apellido.toUpperCase(),
        direccion: users.direccion
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
                    rol: valor.rol,
                    password: valor.password,
           })
    }
        },       
   });
   } 
   BorrarUser(borrarUser: user): void {
    if(confirm(`desea eliminar a ${borrarUser.name}?`)){
      this.userService.BorrarUser(borrarUser.id) ;
    }
}
    editarUser(editarUser: user): void{
      this.matDialog.open(UsersCrearUsuarioComponent , {data: editarUser}).afterClosed().subscribe({
           next: (usereditado) => {
              if (usereditado) {
                this.userService.EditUser(editarUser.id, usereditado)
              }
            },       
          });
   }

}   

