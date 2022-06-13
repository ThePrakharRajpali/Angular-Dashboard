import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';

import { OrdersService } from 'src/app/service/orders/orders.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  orders?: Order[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService
      .getOrders()
      .subscribe((orders) => (this.orders = orders));
  }
}
