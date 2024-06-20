import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationComponent} from "../component/notification/notification.component";
import {NotificationService} from "../service/notification.service";
@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent
  ],
  providers: [
    NotificationService
  ]
})
export class SharedModule {}
