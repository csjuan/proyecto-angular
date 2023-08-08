import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfesoresComponent } from "./profesores.component";



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'profesores',
                component: ProfesoresComponent,
            },
        ])],
        exports: [RouterModule]

})
export class ProfesoresRoutingModule{}