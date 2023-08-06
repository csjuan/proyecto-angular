import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { profesores } from '..';

@Component({
  selector: 'app-crear-profesor', 
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.scss']
})
export class CrearProfesorComponent {
    editarProfesor?: profesores
    controlnombre = new FormControl<string>('', [Validators.required]);
    controlapellido = new FormControl<string>('', [Validators.required]);
    controldireccion = new FormControl<string>('', Validators.required);
    controlemail = new FormControl<string>('', [Validators.required]);
    controlpassword = new FormControl<string>('', [Validators.required]);
   
    profesorform = new FormGroup({
      name: this.controlnombre,
      apellido: this.controlapellido,
      direccion: this.controldireccion,
      email: this.controlemail,
      password: this.controlpassword,
    });

    constructor(private dialogRef : MatDialogRef<CrearProfesorComponent>,
        @Inject(MAT_DIALOG_DATA) private data?: profesores,
        ) {
            if (this.data) {
                this.editarProfesor = this.data;
                this.controlnombre.setValue(this.data.name);
                this.controlapellido.setValue(this.data.apellido);
                this.controldireccion.setValue(this.data.direccion);
                this.controlemail.setValue(this.data.email);
                this.controlpassword.setValue(this.data.password);
            }
        }


    onSubmit(): void{
        if (this.profesorform.invalid) {
            this.profesorform.markAllAsTouched();
        }else{
            this.dialogRef.close(this.profesorform.value);
        }      
    }
}
