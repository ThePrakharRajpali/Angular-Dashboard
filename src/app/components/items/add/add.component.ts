import { Component, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/service/items/items.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  id?: string;
  name?: string;
  rate?: string;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.id && this.name && this.rate) {
      const newItem: Item = {
        id: this.id,
        name: this.name,
        rate: parseInt(this.rate),
      };
      this.itemsService.addItem(newItem);
      this.id = '';
      this.name = '';
      this.rate = '';
    }
  }
}
