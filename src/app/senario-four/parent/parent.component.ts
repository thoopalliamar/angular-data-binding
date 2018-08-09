import { Component, Output,EventEmitter} from '@angular/core';
import {ChildComponent}  from './child/child.component';
import {ViewChild} from '@angular/core';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message;
  @ViewChild(ChildComponent)  parentvar;

  receivemessage($event){
     this.message=$event;
  }
  
  constructor() { }
  // ngAfterViewInit(){
  //   this.parentvar= this.message.message;
  // }
 

}
