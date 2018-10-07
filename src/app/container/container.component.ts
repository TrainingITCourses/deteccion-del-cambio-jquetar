import { Component, OnInit } from '@angular/core';
import {ApiService} from '../store/api.service';
import {SearchResult} from './search/search.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public filteredLaunches: any[] = [];
  public filter: SearchResult;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLaunches$().subscribe(() => {
        this.setDataAndUpdateViews();
      });
  }

  private setDataAndUpdateViews = () => {
    if (!this.filter || !this.filter.value) {
      this.filteredLaunches = [... this.api.launches];
      return;
    }
    this.filteredLaunches = this.api.launches.filter(item => {
      return this.filterItem(item);
      });
  }

  private filterItem = (item: any): boolean => {
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
    this.setDataAndUpdateViews();

  }
}
