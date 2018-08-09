import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsixComponent } from './parentsix/parentsix.component';
import { ChildoneComponent } from './parentsix/childone/childone.component';
import { ChildtwoComponent } from './parentsix/childtwo/childtwo.component';

@NgModule({
  imports: [
    CommonModule
  ],exports:[ParentsixComponent],
  declarations: [ParentsixComponent, ChildoneComponent, ChildtwoComponent]
})
export class SenarioSixModule { }
