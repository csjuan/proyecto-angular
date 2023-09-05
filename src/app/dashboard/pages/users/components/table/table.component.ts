import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { user } from '../modelos';



  
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    displayedColumns: string[] = ['id', 'pipe', 'direccion', 'email', 'edit',];
    @Input()
    dataSource: user[] = [];
    
    @Output()
    quitarUser = new EventEmitter<user>();

    @Output()
    editarUser = new EventEmitter<user>();

}
