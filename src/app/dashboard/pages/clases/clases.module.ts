import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClasesRoutingModule } from './clases-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ClaseEffects } from './store/clase.effects';
import { StoreModule } from '@ngrx/store';
import { claseFeature } from './store/clase.reducer';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClasesRoutingModule,
    StoreModule.forFeature(claseFeature),
    EffectsModule.forFeature([ClaseEffects])
  ],
  exports: [
    ClasesComponent
  ]
})
export class ClasesModule { }
