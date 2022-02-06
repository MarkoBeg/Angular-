import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../db.items';
import { Item } from '../../item-interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  constructor() {}
  items: Item[] = ITEMS;

  ngOnInit(): void {}
}
