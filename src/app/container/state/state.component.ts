import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {SetTitle} from '../../store/title/title.actions';
import {State} from '../../store/status/status.reducer';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public ascendent = true;
  public launches: any[];
  public statuses: any[];
  public filterLaunches: any[] = [];
  public title: string;
  private status: any;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute) {
    this.store.select('status').subscribe(statuses => {
      this.statuses = statuses.statuses;
    });
    this.store.select('launch').subscribe(
      launches => this.launches = launches.launches.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.status = this.statuses.find(x => x.id == params['id']);
        this.filterLaunches = this.launches.filter(value => value.status ==  params['id']);
        this.store.dispatch(new SetTitle({title: 'State name: ' + this.status['name']}));
      }
    });
  }

  onUp = () => {
    this.filterLaunches = [...this.filterLaunches.sort((a, b) => (a.name > b.name ? 1 : -1))];
  }
  onDown = () => {
    this.filterLaunches = [...this.filterLaunches.sort((a, b) => (a.name > b.name ? -1 : 1))];
  }

}
