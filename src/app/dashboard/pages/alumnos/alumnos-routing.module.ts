import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlumnosComponent } from "./alumnos.component";
import { DetalleComponents } from "./componentes/detalle/detalle.component";


@NgModule({
    imports:[
        RouterModule.forChild([
           {
             path: 'alumnos',
             component: AlumnosComponent,
           },
           {
            path: 'alumnos/:detalle',
            component: DetalleComponents,
           },
        ]),
    ],
    exports: [RouterModule]

})
export class AlumnosRountingModule{}