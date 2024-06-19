// src/app/service/shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLogService {
  // messageSource is a private BehaviorSubject that holds the current value of the message
  private messageSource = new BehaviorSubject<string[]>([]);

  // currentMessage is an observable that can be subscribed to
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // changeMessage is a function that changes the value of the messageSource
  changeMessage(message: string[]) {
    console.log(message, "chanre")
    this.messageSource.next(message);
  }

  // currentMessageValue is a getter that returns the current value of the messageSource
  get currentMessageValue() {
    return this.messageSource.value;
  }
}
