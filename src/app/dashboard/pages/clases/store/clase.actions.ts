import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CursosYalumnos } from '../modelos';
import { HttpErrorResponse } from '@angular/common/http';

export const ClaseActions = createActionGroup({
  source: 'Clase',
  events: {
    'Load Clases': emptyProps(),
    'Load Clases Success': props<{ data: CursosYalumnos[] }>(),
    'Load Clases Failure': props<{ error: HttpErrorResponse }>(),
  }
});
