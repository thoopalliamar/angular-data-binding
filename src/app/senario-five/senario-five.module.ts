import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildfiveComponent } from './childfive/childfive.component';
import { GrandchildfiveComponent } from './childfive/grandchildfive/grandchildfive.component';
import { GrandgrandchildComponent } from './childfive/grandchildfive/grandgrandchild/grandgrandchild.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ChildfiveComponent
  ],
  declarations: [ChildfiveComponent, GrandchildfiveComponent, GrandgrandchildComponent]
})
export class SenarioFiveModule { }
