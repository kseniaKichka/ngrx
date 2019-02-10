import { RouterReducerState } from '@ngrx/router-store';

import { UserState, initialUserState } from './user.state';
import { ConfigState, initialConfigState } from './config.state';
import {initialOrderState, OrderState} from "./order.state";

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  config: ConfigState;
  orders: OrderState
}

export const initialAppState: AppState = {
  users: initialUserState,
  orders: initialOrderState,
  config: initialConfigState
};

export function getInitialState(): AppState {
  return initialAppState;
}
