import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

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
