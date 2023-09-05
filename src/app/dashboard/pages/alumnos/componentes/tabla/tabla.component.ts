import { Component, EventEmitter, Input, Output } from '@angular/core';
import { alumnos } from '../modelos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
    displayedColumns: string[] = ['id', 'name', 'apellido', 'direccion', 'email', 'edit',];
    @Input()
    dataSource: alumnos[] = [];
    
    @Output()
    quitarAlumno = new EventEmitter<alumnos>();

    @Output()
    editarAlumno = new EventEmitter<alumnos>();

}
