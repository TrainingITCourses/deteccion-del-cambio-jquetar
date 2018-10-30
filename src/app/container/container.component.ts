import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../store';
import {LoadLaunches} from '../store/launch/launch.actions';
import {LoadStatuses} from '../store/status/status.actions';
import {LoadAgencies} from '../store/agencie/agencie.actions';
import {LoadMissions} from '../store/mission/mission.actions';
import {Observable} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {TitleState} from '../store/title/title.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public title: {title: string};
  public launches$: Observable<any[]>;
  public loaded = false;
  @Input() public version;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
  ) {
    this.loadData();
    this.observeLaunches();
  }

  ngOnInit() {
    this.store.select<TitleState>('title').subscribe(
      title => {
        this.title = title ? {title: title.title} : this.title ;
      });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
    ).subscribe((event) =>
      this.title = {'title': event['title']});
  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadMissions());
  }

  // private titleRouter = (route: ActivatedRoute): string => {
  // }

  private observeLaunches() {
    this.launches$ = this.store.select('launch').pipe(
      tap(() => (this.loaded = true)),
      map(st => st.launches),
      map(launches => launches
      ),
    );
  }


}
