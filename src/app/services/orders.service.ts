import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrderHttp } from '../models/http/order-http.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class OrdersService {

    ordersUrl = `${environment.apiUrl}orders.json`;

    constructor(private _http: HttpClient) { }

    getOrders(): Observable<OrderHttp> {
        return this._http.get<OrderHttp>(this.ordersUrl);
    }

    addOrder(title: string) {
        return this._http.post(this.ordersUrl, title);
    }

}
