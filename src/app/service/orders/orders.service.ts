import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/User';
import { Order } from 'src/app/models/Order';
import { Item } from 'src/app/models/Item';

import { ORDERS } from 'src/app/mock/orders';
import { ITEMS } from 'src/app/mock/items';
import { USERS } from 'src/app/mock/users';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: Order[] = ORDERS;

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  getOrder(id: string): Observable<Order> {
    const order = this.orders.find((o) => o.id == id);
    if (order) return of(order);
    return of();
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  deleteOrder(order: Order): void {
    const i = this.orders.findIndex((o) => o.id == order.id);
    this.orders.splice(i, 1);
  }

  constructor() {}
}
