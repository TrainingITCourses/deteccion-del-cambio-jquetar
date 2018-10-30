import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-state-buttons',
  templateUrl: './state-buttons.component.html',
  styleUrls: ['./state-buttons.component.css']
})
export class StateButtonsComponent implements OnInit {
  @Output() public up = new EventEmitter();
  @Output() public down = new EventEmitter();
  @Input() public ascendent = true;
  constructor() {}

  ngOnInit() {}

  public upClicked = () => {
    this.up.next();
  }

  public downClicked = () => {
    this.down.next();
  }

}
