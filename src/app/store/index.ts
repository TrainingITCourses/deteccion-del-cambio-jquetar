import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromAgencie from './agencie/agencie.reducer';
import * as fromMission from './mission/mission.reducer';
import * as fromStatus from './status/status.reducer';

export interface State {
  launch: fromLaunch.State;
  agencie: fromAgencie.State;
  mission: fromMission.State;
  status: fromStatus.State;
}

export const reducers: ActionReducerMap<State> = {
  launch: fromLaunch.reducer,
  agencie: fromAgencie.reducer,
  mission: fromMission.reducer,
  status: fromStatus.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
