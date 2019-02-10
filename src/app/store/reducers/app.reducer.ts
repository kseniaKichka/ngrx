import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './users.reducer';
import { configReducers } from './configs.reducer';
import { orderReducers } from "./orders.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers,
  orders: orderReducers
};
