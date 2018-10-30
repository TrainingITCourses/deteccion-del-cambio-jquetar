import { Action } from '@ngrx/store';
import {MissionActionTypes} from '../mission/mission.actions';
import {AgencieActions, AgencieActionTypes} from './agencie.actions';


export interface State {
  statuses: any[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: AgencieActions): State {
  switch (action.type) {
    case AgencieActionTypes.LoadAgencies:
      return state;
    case AgencieActionTypes.AgenciesLoaded:
      return { statuses: action.payload };
    default:
      return state;
  }
}
