import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompthreeoneComponent } from './compthreeone/compthreeone.component';
import { ChildComponent } from './compthreeone/child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CompthreeoneComponent ,ChildComponent ],
  declarations: [CompthreeoneComponent, ChildComponent ]
})
export class SenarioThreeModule {  
  
constructor() { }
}
