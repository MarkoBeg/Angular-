import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../db.items';
import { Item } from '../../item-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Crud app';

  inputStuff: string = '';
  inputTime: string = '';
  updateStuff: string = '';

  database: Item[] = ITEMS;

  constructor() {}

  ngOnInit(): void {}

  onChecked(data: any) {
    this.database = this.database.map((value, index) => {
      if (index === data) {
        value.reminder = !value.reminder;
      }
      return value;
    });
  }

  onDelete(data: any) {
    this.database = this.database.filter((value) => value.id !== data);
  }
  // onUpdate(data: any) {
  //   this.database = this.database.map((value, index) => {
  //     if (index === data) {
  //       this.database.title = this.updateStuff;
  //     }
  //     return value;
  //   });
  // }
  
  addStuff() {
    this.database.push({
      id: Math.floor(Math.random() * 99),
      title: this.inputStuff,
      day: this.inputTime,
      reminder: false,
    });

    this.inputStuff = '';
    this.inputTime = '';
  }
}
