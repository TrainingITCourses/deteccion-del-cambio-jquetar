import { Action } from '@ngrx/store';

export enum TitleActionTypes {
  SetTitle = '[Title] Set',
  SettedTitle = '[Title] Setted'
}

export class SetTitle implements Action {
  readonly type = TitleActionTypes.SetTitle;
  constructor(readonly payload: any) { }
}
export class SettedTitle implements Action {
  readonly type = TitleActionTypes.SettedTitle;
  constructor(readonly payload: any) {}
}



export type TitleActions = SetTitle | SettedTitle;
