import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cursos } from '..';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent {
         editarCursos?: cursos
    controlcurso = new FormControl<string>('', [Validators.required]);
    controlduracion = new FormControl<string>('', [Validators.required]);
    controldificultad = new FormControl<string>('', Validators.required);
    
    cursosform = new FormGroup({
      curso: this.controlcurso,
      duracion: this.controlduracion,
      dificultad: this.controldificultad,
    });

    constructor(private dialogRef: MatDialogRef<CrearCursoComponent>,
        @Inject(MAT_DIALOG_DATA) private data?: cursos,
        ) {
            if (this.data) {
                this.editarCursos = this.data;
                this.controlcurso.setValue(this.data.curso);
                this.controlduracion.setValue(this.data.duracion);
                this.controldificultad.setValue(this.data.dificultad);   
            }
        }


    onSubmit(): void{
        if(this.cursosform.invalid){
            this.cursosform.markAllAsTouched();
        }else{
            this.dialogRef.close(this.cursosform.value);
        }     
    }
}
