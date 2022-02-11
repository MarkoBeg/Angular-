import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../db.items';
import { Item } from '../../item-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Small app';

  inputStuff: string = '';
  inputTime: string = '';
  updateStuff: string = '';

  database: Item[] = ITEMS;

  dataStorage: any[] = JSON.parse(
    localStorage.getItem('guest || admin') || '{}'
  );

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
  onUpdate(data: any) {
    this.database = this.database.map((value, index) => {
      if (index === data) {
        value.title = this.updateStuff;
      }
      return value;
    });
    this.updateStuff = '';
  }

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
  getRole(role: any): any {
    try {
      if (this.dataStorage === role) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }
  getLocal() {
    console.log(this.dataStorage);
  }
}
