import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'appchildfour',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  message ;
    clickchild(name){
    this.message=name;
    this.messageEvent.emit(this.message)
  }
  constructor() { }

  // sendmessage(){
  //   this.messageEvent.emit(this.message)
  // }
  ngOnInit() {
  }

}
