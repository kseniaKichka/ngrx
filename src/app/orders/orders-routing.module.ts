import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailsComponent} from "../orders-array/order-details/order-details.component";

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent
    },
    {
        path: 'order/:id',
        component: OrderDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
