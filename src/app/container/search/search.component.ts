import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public missions: any[];
  public agencies: any[];
  public statuses: any[];
  private type: string;
  public list: any[];
  @Output()public filter = new EventEmitter<SearchResult>();

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select('status').subscribe(status => {
      this.statuses = status.statuses.sort((a, b) => (a.name > b.name ? 1 : -1));
    });
    this.store.select('agencie').subscribe(agencies => {
      this.agencies = agencies.statuses.sort((a, b) => (a.name > b.name ? 1 : -1));
    });
    this.store.select('mission').subscribe(mission => {
      this.missions = mission.statuses.sort((a, b) => (a.name > b.name ? 1 : -1));
    });
  }

  public onFilterChange(value: string): void {
    this.type = value;
    switch (value) {
      case 'Agencies': {
        this.list = [...this.agencies];
        break;
      }
      case 'Missions': {
        this.list = [...this.missions];
        break;
      }
      case 'Status': {
        this.list = [...this.statuses];
        break;
      }
      default: {
        this.list = [];
        break;
      }
    }
    this.filter.next(new SearchResult(this.type, undefined));
  }
  public onFilterChange2(value: string): void {
    this.filter.next(new SearchResult(this.type, +value));
   }

}

export class SearchResult {
  constructor (public type: string, public value: number) {}
}
