import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-state-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './state-counter.component.html',
  styleUrls: ['./state-counter.component.css']
})
export class StateCounterComponent implements OnInit {
  @Input() public counter = { length: 0, message: '' };
  constructor() { }

  ngOnInit() {
  }

}
