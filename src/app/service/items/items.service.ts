import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/User';
import { Order } from 'src/app/models/Order';
import { Item } from 'src/app/models/Item';

import { ITEMS } from 'src/app/mock/items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = ITEMS;

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: string): Observable<Item> {
    const item = this.items.find((i) => i.id == id);
    if (item) return of(item);
    return of();
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  deleteItem(item: Item): void {
    const i = this.items.findIndex((it) => it == item);
    this.items.splice(i, 1);
  }

  constructor() {}
}
