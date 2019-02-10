import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersArrayComponent } from './orders-array.component';

describe('OrdersArrayComponent', () => {
  let component: OrdersArrayComponent;
  let fixture: ComponentFixture<OrdersArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
