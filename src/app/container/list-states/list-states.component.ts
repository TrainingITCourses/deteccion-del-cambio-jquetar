import {ChangeDetectionStrategy, Component, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/status/status.reducer';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LoadLaunches} from '../../store/launch/launch.actions';
import {SetTitle} from '../../store/title/title.actions';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.css']
})
export class ListStatesComponent implements OnInit {
  public statuses: any[];
  public nlaunches: number;
  @Output() launchesNumber;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('status').subscribe(status => {
      this.statuses = status.statuses.sort((a, b) => (a.name > b.name ? 1 : -1));
    });
    this.store.select('launch').subscribe(launches => {
      this.nlaunches = launches.launches ? launches.launches.length : 0;
      this.store.dispatch(new SetTitle({title: 'Nº launchs: ' + this.nlaunches}));
    });

  }

}
