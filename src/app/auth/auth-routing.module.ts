import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';




@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ]),
    ],
    exports: [RouterModule]

})
export class AuthRountingModule{}