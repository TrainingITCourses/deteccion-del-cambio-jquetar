import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-state-launchs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './state-launchs.component.html',
  styleUrls: ['./state-launchs.component.css']
})
export class StateLaunchsComponent implements OnInit {
  @Input() public launches: any[];
  constructor() { }

  ngOnInit() { }
}
