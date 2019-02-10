import { Action } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';
import {User} from "../../models/user.model";
import {UserActionsTypes} from "./user.actions";

// enum with action types in a single spot
export enum OrderActionsTypes {
    GetOrders = '[Order] Get Orders',
    GetOrdersSuccess = '[Order] Get Orders Success',
    GetOrder = '[Order] Get Order',
    GetOrderSuccess = '[Order] Get Order Success',
    CreateOrder = '[Order] Create Order',
    CreateOrderSuccess = '[Order] Create Order Success'
}

export class GetOrders implements Action {
    public readonly type = OrderActionsTypes.GetOrders;
}

export class GetOrdersSuccess implements Action {
    public readonly type = OrderActionsTypes.GetOrdersSuccess;
    constructor(public payload: Order[]) { }
}

export class GetOrder implements Action {
    public readonly type = OrderActionsTypes.GetOrder;
    constructor(public payload: number) { }
}

export class GetOrderSuccess implements Action {
    public readonly type = OrderActionsTypes.GetOrderSuccess;
    constructor(public payload: Order) { }
}

export class CreateOrder implements Action {
    public readonly type = OrderActionsTypes.CreateOrder;
    constructor(public payload: string) { }
}

export class CreateOrderSuccess implements Action {
    public readonly type = OrderActionsTypes.CreateOrderSuccess;
    constructor(public payload: Order) { }
}

// export a type with declaration merging... can be this type or that type
export type OrderActions =
    GetOrders |
    GetOrdersSuccess |
    GetOrder |
    GetOrderSuccess |
    CreateOrder |
    CreateOrderSuccess;