import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../api.service';
import {LaunchActionTypes, LaunchesLoaded} from './launch.actions';
import {map, mergeMap} from 'rxjs/operators';


@Injectable()
export class LaunchEffects {
  @Effect()
  public load$ = this.actions$.pipe(
      ofType(LaunchActionTypes.LoadLaunches),
      mergeMap(() =>
        this.api.getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
