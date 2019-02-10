import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { OrderState } from '../state/order.state';

const selectOrders = (state: AppState) => state.orders;

export const selectOrderList = createSelector(
    selectOrders,
    (state: OrderState) => state.orders
);

export const selectSelectedOrder = createSelector(
    selectOrders,
    (state: OrderState) => state.selectedOrder
);
