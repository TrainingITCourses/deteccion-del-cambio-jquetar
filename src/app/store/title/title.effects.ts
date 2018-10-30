import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {SettedTitle, SetTitle, TitleActionTypes} from './title.actions';
import {map, mergeMap} from 'rxjs/operators';
import {of, pipe} from 'rxjs';
import {ApiService} from '../api.service';


@Injectable()
export class TitleEffects {
  constructor(private actions$: Actions, private api: ApiService) {
  }


  @Effect()
  public set$ = this.actions$.ofType(TitleActionTypes.SetTitle).pipe(
    mergeMap((action: SetTitle) =>
      // of(new SettedTitle(this.api.postTitle(action.payload)))));
      of(this.api.postTitle(action.payload))));
}
