import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {StatusActionTypes, StatusesLoaded} from './status.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../api.service';


@Injectable()
export class StatusEffects {

  @Effect()
  public load$ = this.actions$.pipe(
      ofType(StatusActionTypes.LoadStatuses),
      mergeMap(() =>
        this.api
          .getStatusTypes$()
          .pipe(map(statuses => new StatusesLoaded(statuses)))
      )
    );
  constructor(private actions$: Actions, private api: ApiService) {}

}
