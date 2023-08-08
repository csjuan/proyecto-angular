import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { UsersComponent } from './users.component';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule ({
    imports:[
        RouterModule.forChild([
           {
             path: '',
             component: UsersComponent,
           },
           {
            path: 'users/:detalle',
            component:DetalleComponent,
           },
        ]),
    ],
    exports: [RouterModule]

})

export class UsersRoutingModule{}