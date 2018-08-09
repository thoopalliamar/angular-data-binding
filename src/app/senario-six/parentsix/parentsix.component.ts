import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentsix',
  templateUrl: './parentsix.component.html',
  styleUrls: ['./parentsix.component.css']
})
export class ParentsixComponent implements OnInit {

message;
  receivemessage($event){
    this.message=$event;
 }
 
  constructor() { }

  ngOnInit() {
  }

}
