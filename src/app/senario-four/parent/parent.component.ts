import { Component, Output} from '@angular/core';
import {ChildComponent}  from './child/child.component';
import {ViewChild} from '@angular/core';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) localfour;
  @Output() parentvar;
  
  constructor() { }
  ngAfterViewInit(){
    this.parentvar= this.localfour.childvar;
  }
 

}
