import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MissionActionTypes, MissionsLoaded} from '../mission/mission.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../api.service';
import {AgencieActionTypes, AgenciesLoaded} from './agencie.actions';


@Injectable()
export class AgencieEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(AgencieActionTypes.LoadAgencies),
    mergeMap(() =>
      this.api
        .getAgencies$()
        .pipe(map(agencies => new AgenciesLoaded(agencies)))
    )
  );
  constructor(private actions$: Actions, private api: ApiService) {}
}
