import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compthreeone',
  templateUrl: './compthreeone.component.html',
  styleUrls: ['./compthreeone.component.css']
})
export class CompthreeoneComponent implements OnInit {
  localparent;
  clickparent(name){
    this.localparent=name;
  }
  constructor() { }

  ngOnInit() {
  }

}
