import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { CommonModule } from '@angular/common';
import { GreetingsService } from './greetings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [GreetingsService], 
  imports: [RouterOutlet, HelloComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public myName: string = 'Dev';
  public titleStyle = {};

  constructor (private greetingsService: GreetingsService) {
  }

  onSayHello(message : any) {
    this.greetingsService.handleGreeting(message);
    console.log(message);
    this.updateTittleStyle();
  }

  // ! Esta funcion recibe un string y devuelve un objeto con las clases css a modo de clave
  // ! y un booleano como valor
  updateNameClass(name: string): string {
    if (!name || name.length === 0) {
      return '';
    } else if (name.length < 3) {
      return 'name-invalid';
    } else if (name.length > 10) {
      return 'name-warning';
    } else {
      return 'name-valid';
    }
  }

  updateTittleStyle() {
    this.titleStyle = {
      'margin-top' : '40px',
       'color': this.greetingsService.counter < 3 ? 'blue' : 'red'
    }
  }

}
