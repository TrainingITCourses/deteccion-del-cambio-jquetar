import { Component, OnInit } from '@angular/core';
import {ApiService} from '../store/api.service';
import {SearchResult} from './search/search.component';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../store';
import {LoadLaunches} from '../store/launch/launch.actions';
import {LoadStatuses} from '../store/status/status.actions';
import {LoadAgencies} from '../store/agencie/agencie.actions';
import {LoadMissions} from '../store/mission/mission.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public filteredLaunches$: Observable<any[]>;
  public filter: SearchResult;
  public loaded = false;

  constructor(
    private api: ApiService,
    private store: Store<State>
    ) { }

  ngOnInit() {
    this.loadData();
    this.observeLaunches();
    this.observeLaunches();
  }
  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadMissions());
  }

  private observeLaunches() {
    this.filteredLaunches$ = this.store.select('launch').pipe(
      tap(() => (this.loaded = true)),
      map(st => st.launches),
      map(launches => launches
            .filter(l => this.filterItem(l))
            .sort((a, b) => (a.isostart > b.isostart ? 1 : -1))
        ),
      );
  }

  private filterItem = (item: any): boolean => {
    if (!this.filter || !this.filter.value) {
      return true;
    }
    switch (this.filter.type) {
      case 'Agencies': {
        return item.location.pads.some(item2 =>
          !!item2.agencies && item2.agencies.some(element => (
            element.id === this.filter.value)))
          ||
          item.missions.some(item2 =>
            !!item2.agencies && item2.agencies.some(element => (
              element.id === this.filter.value)))
          ||
          (!!item.rocket.agencies && item.rocket.agencies.some(element =>
            (element.id === this.filter.value)));
      }
      case 'Missions': {
        return !!item.missions && item.missions.some(element => (element.type === this.filter.value));
      }
      case 'Status': {
        return item.status === this.filter.value;
      }
      default: {
        return false;
      }
    }
  }

  public onFilter = (filter: SearchResult) => {
    this.filter = filter;
    this.observeLaunches();
  }
}
