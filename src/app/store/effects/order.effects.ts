import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { OrdersService } from 'src/app/services/orders.service';
import { GetOrders, OrderActionsTypes, GetOrderSuccess, GetOrder, GetOrdersSuccess } from '../actions/order.actions';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { OrderHttp } from 'src/app/models/http/order-http.model';
import { selectOrderList } from '../selectors/order.selector';

@Injectable()
export class OrderEffects {

    @Effect() getOrder$ = this._actions$.pipe(
        ofType<GetOrder>(OrderActionsTypes.GetOrder),
        map(action => {
            console.log(action);
            return action.payload;
        }),
        withLatestFrom(this._store.pipe(select(selectOrderList))),
        switchMap(([id, orders]) => {
            console.log('SWITCH MAP', id, orders);
            const selectedOrder = orders.filter(order => order.id === +id)[0];
            return of(new GetOrderSuccess(selectedOrder));
        })
    );

    @Effect()
    getOrders$ = this._actions$.pipe(
        ofType<GetOrders>(OrderActionsTypes.GetOrders),
        switchMap(() => this._ordersService.getOrders()),
        switchMap((orderHttp: OrderHttp) => of(new GetOrdersSuccess(orderHttp.orders)))
    );

    constructor(
        private _ordersService: OrdersService,
        private _actions$: Actions,
        private _store: Store<AppState>
    ) { }
}
