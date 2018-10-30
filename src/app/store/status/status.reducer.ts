import {StatusActions, StatusActionTypes} from './status.actions';

export interface State {
  statuses: any[];
}

export const initialState: State = {
  statuses: []
};

export function reducer(state = initialState, action: StatusActions): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      return state;
    case StatusActionTypes.StatusesLoaded:
      return { statuses: action.payload };
    default:
      return state;
  }
}
