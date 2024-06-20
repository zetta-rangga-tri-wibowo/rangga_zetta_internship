import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string>('');

  notification$ = this.notificationSubject.asObservable();

  notify(message: string) {
    this.notificationSubject.next(message);
  }
}
