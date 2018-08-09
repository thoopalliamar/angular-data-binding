import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appchildfour',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childvar = "hello";
  // clickchild(name){
  //   this.childvar=name;
  // }
  constructor() { }

  ngOnInit() {
  }

}
