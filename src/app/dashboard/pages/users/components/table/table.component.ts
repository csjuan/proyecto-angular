import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { alumnos } from '../modelos/index';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    displayedColumns: string[] = ['id', 'pipe', 'direccion', 'email', 'edit',];
    @Input()
    dataSource: alumnos[] = [];
    
    @Output()
    quitaralumno = new EventEmitter<alumnos>();

    @Output()
    editalumno = new EventEmitter<alumnos>();

}
