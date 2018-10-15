import {StatusActionTypes} from '../status/status.actions';
import {MissionActions, MissionActionTypes} from './mission.actions';


export interface State {
  statuses: any[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: MissionActions): State {
  switch (action.type) {
    case MissionActionTypes.LoadMissions:
      return state;
    case MissionActionTypes.MissionsLoaded:
      return { statuses: action.payload };
    default:
      return state;
  }
}
