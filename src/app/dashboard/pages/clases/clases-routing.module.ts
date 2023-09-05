import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';



@NgModule({
    imports:[
        RouterModule.forChild([
           {
             path: 'clases', 
             component: ClasesComponent,
           },
        ]),
    ],
    exports: [RouterModule]

})

export class ClasesRoutingModule { }
