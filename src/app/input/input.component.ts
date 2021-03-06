import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() idInput: string;
  @Input() nameInput: string;
  @Output() valueInput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eventInput($event){
   this.valueInput.emit($event);
   }
}
