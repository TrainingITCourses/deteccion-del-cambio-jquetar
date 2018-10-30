import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromAgencie from './agencie/agencie.reducer';
import * as fromMission from './mission/mission.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromTitle from './title/title.reducer';

export interface State {
  launch: fromLaunch.State;
  agencie: fromAgencie.State;
  mission: fromMission.State;
  status: fromStatus.State;
  title: fromTitle.TitleState;
}

export const reducers: ActionReducerMap<State> = {
  launch: fromLaunch.reducer,
  agencie: fromAgencie.reducer,
  mission: fromMission.reducer,
  status: fromStatus.reducer,
  title: fromTitle.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
