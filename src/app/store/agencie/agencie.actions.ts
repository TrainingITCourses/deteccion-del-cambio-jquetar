import { Action } from '@ngrx/store';

export enum AgencieActionTypes {
  LoadAgencies = '[Agencie] Load Agencies',
  AgenciesLoaded = '[Agencie] Agencies Loaded'
}

export class LoadAgencies implements Action {
  readonly type = AgencieActionTypes.LoadAgencies;
}

export class AgenciesLoaded implements Action {
  readonly type = AgencieActionTypes.AgenciesLoaded;
  constructor(readonly payload: any[]) {}
}

export type AgencieActions = LoadAgencies | AgenciesLoaded;
