import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponeoneComponent } from './componeone/componeone.component';
import { SenarioTwoModule } from '../senario-two/senario-two.module';

@NgModule({
  imports: [
    CommonModule,
   
  ],
  exports:[ComponeoneComponent],
  declarations: [ComponeoneComponent]
})
export class SenarioOneModule { }
