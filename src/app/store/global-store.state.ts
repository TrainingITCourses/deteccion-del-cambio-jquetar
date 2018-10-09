import {Injectable} from '@angular/core';
import {Global, globalInitialState} from './models/global.model';
import {BehaviorSubject} from 'rxjs';
import {GlobalActions, GlobalActionTypes} from './global-store.actions';
import {globalStoreReducer} from './global-store.reducer';


@Injectable({
  providedIn: 'root'
})
export class GlobalStore {
  private state: Global = { ...globalInitialState };
  private launches$ = new BehaviorSubject<any>(this.state.launches);
  private statuses$ = new BehaviorSubject<any>(this.state.statuses);
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private missions$ = new BehaviorSubject<any>(this.state.missions);
  constructor() {}

  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return this.launches$.asObservable();
      case GlobalSlideTypes.statuses:
        return this.statuses$.asObservable();
      case GlobalSlideTypes.agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.missions:
        return this.missions$.asObservable();
    }
  }

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return [...this.state.launches];
      case GlobalSlideTypes.statuses:
        return [...this.state.statuses];
      case GlobalSlideTypes.agencies:
        return [...this.state.agencies];
      case GlobalSlideTypes.missions:
        return [...this.state.missions];
    }
  }

  public dispatch = (action: GlobalActions) => {
    console.log('dispatching...', action);
    this.state = globalStoreReducer(this.state, action);
    switch (action.type) {
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
      case GlobalActionTypes.LoadStatuses:
        this.statuses$.next([...this.state.statuses]);
        break;
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case GlobalActionTypes.LoadMissions:
        this.missions$.next([...this.state.missions]);
        break;
    }
  }
}

export enum GlobalSlideTypes {
  launches = 'launches',
  statuses = 'statuses',
  agencies = 'agencies',
  missions = 'missions'
}



