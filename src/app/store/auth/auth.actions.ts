import { createActionGroup, props } from "@ngrx/store";
import { user } from "src/app/dashboard/pages/users/components/modelos";


export const authAction = createActionGroup({
    source: 'Auth',
    events: {
        'setUser': props<{datos: user | null}>()
    }
})