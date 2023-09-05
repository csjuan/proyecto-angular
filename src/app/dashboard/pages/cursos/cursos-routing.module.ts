import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CursosComponent } from "./cursos.component";


@NgModule({
    imports:[
        RouterModule.forChild([
           {
             path: 'cursos', 
             component: CursosComponent,
           },
        ]),
    ],
    exports: [RouterModule]

})
export class CursosRountingModule{}