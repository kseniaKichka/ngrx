import { initialOrderState, OrderState } from '../state/order.state';
import { OrderActions, OrderActionsTypes } from '../actions/order.actions';

export const orderReducers = (state = initialOrderState, action: OrderActions): OrderState => {
    switch (action.type) {
        case OrderActionsTypes.GetOrdersSuccess: {
            return {
                ...state,
                orders: action.payload
            };
        }
        case OrderActionsTypes.GetOrderSuccess: {
            return {
                ...state,
                selectedOrder: action.payload
            };
        }
        default:
            return state;
    }
};