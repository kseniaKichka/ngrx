import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./store/reducers/app.reducer";
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { ConfigEffects } from './store/effects/config.effects';
import {OrderEffects} from "./store/effects/order.effects";
import { OrdersArrayComponent } from './orders-array/orders-array.component';
import { OrderDetailsComponent } from './orders-array/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreModule.forRoot( appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects, OrderEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
