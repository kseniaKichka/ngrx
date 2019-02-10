import { Order } from 'src/app/models/order.model';

// user state structure
export interface OrderState {
    orders: Order[] | [];
    selectedOrder: Order | null;
}

// initial user state that implements the user state structrue
export const initialOrderState: OrderState = {
    orders: [
            {
                "id": 1,
                "name": "Order 1"
            }
        ],
    selectedOrder: null
};