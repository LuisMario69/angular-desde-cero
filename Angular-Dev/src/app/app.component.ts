import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public myName: string = 'Dev';

  onSayHello(message : any) {
    console.log(message);
  }

  // ! Esta funcion recibe un string y devuelve un objeto con las clases css a mode de clave
  // ! y un booleano como valor
  updateNameClass(name: string) {
    return {
      'error' : name.length <= 3,
      'warning' : name.length > 3 && name.length <= 6,
      'success' : name.length > 6,
      'bold' : name.length > 8
    }

  }
}
