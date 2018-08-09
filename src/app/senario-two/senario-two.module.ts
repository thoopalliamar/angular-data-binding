import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptwooneComponent } from './comptwoone/comptwoone.component';
import { FormsModule } from '@angular/forms';
import { SenarioOneModule } from '../senario-one/senario-one.module';

@NgModule({
  imports: [
    CommonModule,
    SenarioOneModule,
    FormsModule
  ],
  exports:[
    ComptwooneComponent
  ],
  declarations: [ComptwooneComponent]
})
export class SenarioTwoModule { }
