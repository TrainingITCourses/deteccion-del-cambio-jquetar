import { Component, OnInit } from '@angular/core';
import {ApiService} from '../store/api.service';
import {SearchResult} from './search/search.component';
import {GlobalSlideTypes, GlobalStore} from '../store/global-store.state';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public filteredLaunches$: Observable<any[]>;
  public filter: SearchResult;

  constructor(
    private api: ApiService,
    private global: GlobalStore
    ) { }

  ngOnInit() {
    this.loadData();
    this.observeLaunches();
    this.observeLaunches();
  }
  private loadData() {
    this.api.getLaunches();
    this.api.getStatusTypes();
    this.api.getAgencies();
    this.api.getMissionTypes();
  }

  private observeLaunches() {
    this.filteredLaunches$ = this.global.select$(GlobalSlideTypes.launches)
      .pipe(
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
