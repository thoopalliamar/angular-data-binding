import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componeone',
  templateUrl: './componeone.component.html',
  styleUrls: ['./componeone.component.css']
})
export class ComponeoneComponent implements OnInit {
    testlocal;
  onClick(name){
    this.testlocal = name;
    console.log(name)
  }
  constructor() { }

  ngOnInit() {
  }

}
