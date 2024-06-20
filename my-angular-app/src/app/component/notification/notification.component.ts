import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from "../../service/notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  message: string | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notification$.subscribe(
      message => {
        this.message = message;
        // setTimeout(() => this.message = null, 3000); // Clear notification after 3 seconds
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
