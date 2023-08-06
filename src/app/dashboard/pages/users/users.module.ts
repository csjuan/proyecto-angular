import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersCrearUsuarioComponent } from './components/users-crear-usuario/users-crear-usuario.component';
import { TableComponent } from './components/table/table.component';
import { UsersService } from 'src/app/core/services/users.service';
import { UserMockService } from 'src/app/core/mocks/user-mock.service';


@NgModule({
  declarations: [
    UsersComponent,
    UsersCrearUsuarioComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    {
        provide: UsersService,
        useClass: UserMockService,
    }
  ]
})
export class UsersModule { }
