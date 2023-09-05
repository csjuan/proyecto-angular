import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authFeatureKey, authReducer } from "./auth/auth.reducer";


export interface Appstate {
    [authFeatureKey]: AuthState;
}
export const appReducer : ActionReducerMap<Appstate> = {
    [authFeatureKey]: authReducer,
}