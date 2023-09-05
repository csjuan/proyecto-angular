import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClaseActions } from './store/clase.actions';
import { Observable } from 'rxjs';
import { selectclases } from './store/clase.selectors';
import { CursosYalumnos } from './modelos';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
    displayedColumns = ['id', 'curso', 'alumno'];
    clases$: Observable<CursosYalumnos[]>;
    constructor(private store: Store){
        this.clases$ = this.store.select(selectclases)
    }

    ngOnInit(): void {
        this.store.dispatch(ClaseActions.loadClases())
    }
}
