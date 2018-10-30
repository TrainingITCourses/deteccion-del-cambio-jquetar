import {TitleActions, TitleActionTypes} from './title.actions';


export interface TitleState {
  title: string;
}

export const initialState: TitleState = {
  title: '0 Launchs',
};

export function reducer(state = initialState, action: TitleActions): TitleState {
  switch (action.type) {
    case TitleActionTypes.SetTitle:
      state.title = action.payload.title;
      return {...state};
    case TitleActionTypes.SettedTitle:
      return {...state};
  }
}
