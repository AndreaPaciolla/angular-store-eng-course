import { MetaReducer } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import { loginStatusReducer } from './reducers/login-status.reducer';

export interface AppState {
  loginStatus: boolean;
}

export const reducers: ActionReducerMap<AppState> = {
  loginStatus: loginStatusReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
