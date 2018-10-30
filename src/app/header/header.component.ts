import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TitleState} from '../store/title/title.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public appTitle = {title: 'Sin titulo'};

  constructor(private store: Store<TitleState>) { }

  ngOnInit() { }

}
