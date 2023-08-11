import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from "./not-found/not-found.component";




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
            {
                path: '**',
                component: NotFoundComponent
            },       
        ]),
    ],
    exports: [RouterModule]

})
export class AuthRountingModule{}