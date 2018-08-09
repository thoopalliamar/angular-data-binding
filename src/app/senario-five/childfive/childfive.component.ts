import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childfive',
  templateUrl: './childfive.component.html',
  styleUrls: ['./childfive.component.css']
})
export class ChildfiveComponent implements OnInit {

  message;
   

  messageEvent(data:string){
     this.message=data;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
