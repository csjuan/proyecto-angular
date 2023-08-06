import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cursos } from '..';

@Component({
  selector: 'app-tabla-curso',
  templateUrl: './tabla-curso.component.html',
  styleUrls: ['./tabla-curso.component.scss']
})
export class TablaCursoComponent {
    displayedColumns: string[] = ['id', 'curso', 'duracion', 'dificultad', 'editar',];
    @Input()
    dataSource: cursos[] = [];

    @Output()
    quitarcurso = new EventEmitter<cursos>();

    @Output()
    editcurso = new EventEmitter<cursos>();

}
