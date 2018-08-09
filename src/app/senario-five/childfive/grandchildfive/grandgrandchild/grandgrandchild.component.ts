import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grandgrandchild',
  templateUrl: './grandgrandchild.component.html',
  styleUrls: ['./grandgrandchild.component.css']
})
export class GrandgrandchildComponent implements OnInit {

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
