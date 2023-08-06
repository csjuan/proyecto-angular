import { Component, EventEmitter, Input, Output } from '@angular/core';
import { profesores } from '..';



@Component({
  selector: 'app-tabla-profesor',
  templateUrl: './tabla-profesor.component.html',
  styleUrls: ['./tabla-profesor.component.scss']
})
export class TablaProfesorComponent {

    displayedColumns: string[] = ['id', 'name', 'apellido', 'direccion', 'email', 'editar',];
    @Input()
    dataSource: profesores[] = [];

    @Output()
    quitarprofesor = new EventEmitter<profesores>();

    @Output()
    editprofesor = new EventEmitter<profesores>();

}
