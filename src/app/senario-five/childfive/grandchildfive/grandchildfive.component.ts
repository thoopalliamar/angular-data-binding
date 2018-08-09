import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchildfive',
  templateUrl: './grandchildfive.component.html',
  styleUrls: ['./grandchildfive.component.css']
})
export class GrandchildfiveComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  message ;
    clickchild(name){
    this.message=name;
    this.messageEvent.emit(this.message)
  }
   
  
  constructor() { }

  ngOnInit() {
  }

}
