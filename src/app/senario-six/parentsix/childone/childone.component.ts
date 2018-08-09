import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  @Input() childvariable;
 
  constructor() { }

  ngOnInit() {
  }

}
