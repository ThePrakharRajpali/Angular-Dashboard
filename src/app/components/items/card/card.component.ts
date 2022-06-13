import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item?: Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deleteItem.emit(this.item);
  }
}
