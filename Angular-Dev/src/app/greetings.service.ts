import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class GreetingsService {
    public counter = 0;

  constructor(private logger: LoggerService) { 

  }

  handleGreeting(menssage: string) {
    this.counter++;
    this.logger.log(menssage);
  }
}