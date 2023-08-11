import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';    
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { PipePipe } from './pipes/pipe.pipe';
import { ErrorPipe } from './pipes/error.pipe';
import { FontDirective } from './directiva/font.directive';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    PipePipe,
    ErrorPipe,
    FontDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:  [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    PipePipe,
    ErrorPipe,
    FontDirective,
    MatListModule,
    
  ]
})
export class SharedModule { }
