import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import e from 'express';

@Component({
  selector: 'app-hello',
  imports: [FormsModule, CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  @Input() name: string = '';
  @Output() sayHello: EventEmitter<string> = new EventEmitter()

  public namesList: Array<string> = [];
  public inputName: string = '';
  
  constructor() { 
  };

  onNameClick() {
    this.sayHello.emit('Hello!');
  }

  addName() {
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }

}
