import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, CommonModule],
  providers: [LoggerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public myName: string = 'Dev';
  public titleStyle = {};
  public counter = 0;

  constructor (private logger : LoggerService) {

  }

  onSayHello(message : any) {
    this.logger.log(message)
    console.log(message);
    this.counter++;
    this.updateTittleStyle();
  }

  // ! Esta funcion recibe un string y devuelve un objeto con las clases css a modo de clave
  // ! y un booleano como valor
  updateNameClass(name: string) {
    return {
      'error' : name.length <= 3,
      'warning' : name.length > 3 && name.length <= 6,
      'success' : name.length > 6,
      'bold' : name.length > 8
    }

  }

  updateTittleStyle() {
    this.titleStyle = {
      'margin-top' : '40px',
      'color': this.counter < 3 ? 'blue' : 'red'
    }
  }
}
