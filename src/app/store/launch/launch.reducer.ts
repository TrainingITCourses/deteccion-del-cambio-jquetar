import { Action } from '@ngrx/store';
import {LaunchActions, LaunchActionTypes} from './launch.actions';


export interface State {
  launches: any[];
  loading: boolean;
}

export const initialState: State = {
  launches: [],
  loading: false
};

export function reducer(state = initialState, action: LaunchActions): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state, loading: true };
    case LaunchActionTypes.LaunchesLoaded:
      return { loading: false, launches: action.payload };
    default:
      return state;
  }
}
