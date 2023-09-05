import { createFeature, createReducer, on } from '@ngrx/store';
import { ClaseActions } from './clase.actions';
import { CursosYalumnos } from '../modelos/index';

export const claseFeatureKey = 'clase';

export interface State {
  data: CursosYalumnos[];
  loading: boolean;
}

export const initialState: State = {
    data: [],
    loading: false,
};

export const reducer = createReducer(
  initialState,
  on(ClaseActions.loadClases, state => {
    return{
        ...state,
        loading: true
    }
  }),
  on(ClaseActions.loadClasesSuccess, (state, action) => {
    return {
        data: action.data,
        loading: false
    }
  }),
  on(ClaseActions.loadClasesFailure, (state, action) => state),
);

export const claseFeature = createFeature({
  name: claseFeatureKey,
  reducer,
});

