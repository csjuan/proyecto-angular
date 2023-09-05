import { createReducer, on } from '@ngrx/store';
import { user } from '../../dashboard/pages/users/components/modelos/index';
import { authAction } from './auth.actions';


export const authFeatureKey = 'auth';
export interface AuthState  {
    authUser: user | null;   
}
const initialState: AuthState = {
    authUser: null,
}
export const authReducer = createReducer(initialState,on(authAction.setUser,(currentState, action) => {
    return {authUser: action.datos}
}))