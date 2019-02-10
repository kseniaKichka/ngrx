import { Component, OnInit } from '@angular/core';
import { selectOrderList, selectSelectedOrder } from "../../store/selectors/order.selector";
import { AppState } from "../../store/state/app.state";
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { GetOrder, GetOrders } from "../../store/actions/order.actions";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

    orders$ = this._store.pipe(select(selectOrderList));

    order$ = this._store.pipe(select(selectSelectedOrder));

    public id:number;


    constructor(
        private _store: Store<AppState>
        , private _router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        // tslint:disable-next-line:no-debugger
        // debugger;
        this._store.dispatch(new GetOrders());
    }

    navigateToOrder(id: number) {
        this.id = id;
        this._store.dispatch(new GetOrder(this.id));
        // this._router.navigate(['order', id]);
    }

}
