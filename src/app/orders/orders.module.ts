import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { orderReducers } from '../store/reducers/orders.reducer';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {OrdersArrayComponent} from "../orders-array/orders-array.component";
import {OrderDetailsComponent} from "../orders-array/order-details/order-details.component";

@NgModule({
  declarations: [
      OrderListComponent,
      OrdersArrayComponent,
      OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule
  ]
})
export class OrdersModule { }
