import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../models/order.model";

@Component({
  selector: 'app-orders-array',
  templateUrl: './orders-array.component.html',
  styleUrls: ['./orders-array.component.css']
})
export class OrdersArrayComponent implements OnInit {

    @Input() orders: Order[];

    @Output() orderSelected: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    navigateToOrder(id: number) {
        this.orderSelected.emit(id);
    }
}
