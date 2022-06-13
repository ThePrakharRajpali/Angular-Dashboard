import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/models/Item';
import { ItemsService } from 'src/app/service/items/items.service';

@Component({
  selector: 'app-item-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  items?: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems().subscribe((items) => (this.items = items));
  }

  deleteItem(item: Item): void {
    this.itemsService.deleteItem(item);
  }
}
