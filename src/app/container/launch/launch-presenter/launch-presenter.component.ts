import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-launch-presenter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-presenter.component.html',
  styleUrls: ['./launch-presenter.component.css']
})
export class LaunchPresenterComponent implements OnInit {
  @Input() public launch: any;
  constructor() { }

  ngOnInit() {
  }

}
