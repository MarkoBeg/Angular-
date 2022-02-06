import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  //testing passing the props to the child component
  @Input() text?: string;
  @Input() color?: string;
  //output prop prema parent komponenti
  @Output() deleteItem = new EventEmitter();

  ngOnInit(): void {}

  onClick() {
    this.deleteItem.emit();
  }
}
