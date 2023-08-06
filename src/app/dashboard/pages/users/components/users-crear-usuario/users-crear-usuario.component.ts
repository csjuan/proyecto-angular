import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { alumnos } from '../modelos';



@Component({
  selector: 'app-users-crear-usuario',
  templateUrl: './users-crear-usuario.component.html',
  styleUrls: ['./users-crear-usuario.component.scss']
})
export class UsersCrearUsuarioComponent {
    editarAlumno?: alumnos
    controlnombre = new FormControl<string>('', [Validators.required]);
    controlapellido = new FormControl<string>('', [Validators.required]);
    controldireccion = new FormControl<string>('', Validators.required);
    controlemail = new FormControl<string>('', [Validators.required]);
    controlpassword = new FormControl<string>('', [Validators.required]);
   
    userform = new FormGroup({
      name: this.controlnombre,
      apellido: this.controlapellido,
      direccion: this.controldireccion,
      email: this.controlemail,
      password: this.controlpassword,

    });
    constructor( private diaLogRef: MatDialogRef<UsersCrearUsuarioComponent>,
        @Inject(MAT_DIALOG_DATA) private data?: alumnos,
        ) {
            if (this.data) {
                this.editarAlumno = this.data;
                this.controlnombre.setValue(this.data.name);
                this.controlapellido.setValue(this.data.apellido);
                this.controldireccion.setValue(this.data.direccion);
                this.controlemail.setValue(this.data.email);
                this.controlpassword.setValue(this.data.password);
            }
        }
    onSubmit(): void {
        if (this.userform.invalid) {
            this.userform.markAllAsTouched();
        }else {
            this.diaLogRef.close(this.userform.value);
        }     
    }
}
   

