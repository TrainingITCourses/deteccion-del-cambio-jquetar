import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StatusActionTypes, StatusesLoaded} from '../status/status.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../api.service';
import {MissionActionTypes, MissionsLoaded} from './mission.actions';


@Injectable()
export class MissionEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(MissionActionTypes.LoadMissions),
    mergeMap(() =>
      this.api
        .getMissionTypes$()
        .pipe(map(missions => new MissionsLoaded(missions)))
    )
  );
  constructor(private actions$: Actions, private api: ApiService) {}
}
