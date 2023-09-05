import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ClaseActions } from './clase.actions';
import { HttpClient } from '@angular/common/http';
import { CursosYalumnos } from '../modelos';
import { environment } from 'src/environments/environment';


@Injectable()
export class ClaseEffects {

  loadClases$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ClaseActions.loadClases),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getCursoYalumno().pipe(
          map(data => ClaseActions.loadClasesSuccess({ data })),
          catchError(error => of(ClaseActions.loadClasesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}
    private getCursoYalumno(): Observable<CursosYalumnos[]> {
        return this.httpClient.get<CursosYalumnos[]>(environment.baseUrl + '/clases?_expand=curso&_expand=alumno');
    }
}
