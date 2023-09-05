import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { alumnos } from '../modelos';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.scss']
})
export class CrearAlumnoComponent {
    editarAlumno?: alumnos
    controlnombre = new FormControl<string>('', [Validators.required]);
    controlapellido = new FormControl<string>('', [Validators.required]);
    controldireccion = new FormControl<string>('', Validators.required);
    controlemail = new FormControl<string>('', [Validators.required, Validators.email]);
    controlpassword = new FormControl<string>('', [Validators.required]);
   
    alumnoform = new FormGroup({
      name: this.controlnombre,
      apellido: this.controlapellido,
      direccion: this.controldireccion,
      email: this.controlemail,
      password: this.controlpassword,

    });
    constructor( private diaLogRef: MatDialogRef<CrearAlumnoComponent>,
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
        if (this.alumnoform.invalid) {
            this.alumnoform.markAllAsTouched();
        }else {
            this.diaLogRef.close(this.alumnoform.value);
        }     
    }
}
