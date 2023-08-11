import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersCrearUsuarioComponent } from './components/users-crear-usuario/users-crear-usuario.component';
import { TableComponent } from './components/table/table.component';
import { UsersRoutingModule } from './users-routing.module';
import { DetalleComponent } from './components/detalle/detalle.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersCrearUsuarioComponent,
    TableComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    UsersRoutingModule,

  ],
  exports: [
    UsersComponent
  ],
  providers: [
   
  ]
})
export class UsersModule { }
