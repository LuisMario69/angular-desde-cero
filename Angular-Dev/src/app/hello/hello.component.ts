import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpperCapitalPipe } from './upper-capital.pipe';
import { GreetingsService } from '../greetings.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  providers: [GreetingsService],
  imports: [FormsModule, CommonModule, UpperCapitalPipe],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})

export class HelloComponent {
  @Input() name: string = '';
  @Output() sayHello: EventEmitter<string> = new EventEmitter()

  public namesList: Array<string> = [];
  public inputName: string = '';
  
  constructor(private greetingsService: GreetingsService) {
    
  };

  onNameClick() {
    console.log("Counter in HelloComponent: ", this.greetingsService.counter);
    this.sayHello.emit('Hello!');
  }

  addName() {
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }

}
