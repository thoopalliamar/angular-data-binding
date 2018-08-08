import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componeone',
  templateUrl: './componeone.component.html',
  styleUrls: ['./componeone.component.css']
})
export class ComponeoneComponent implements OnInit {
 
  onClick(name){
    console.log(name)
  }
  constructor() { }

  ngOnInit() {
  }

}
