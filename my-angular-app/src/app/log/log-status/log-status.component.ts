import {Component, OnInit} from '@angular/core';
import {Logger} from "../../service/logger.service";
import { SharedLogService } from '../../service/shared-log.service';


@Component({
  selector: 'app-log-status',
  templateUrl: './log-status.component.html',
  styleUrls: ['./log-status.component.css']
})
export class LogStatusComponent  implements OnInit {
  messages: string[] = [];

  // Inject the logger service
  constructor(private sharedService: SharedLogService) { }


  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.messages = message);
  }

  logMessage(message: string): void {
    this.sharedService.changeMessage([...this.sharedService.currentMessageValue, message]);
  }

  clearLog(): void {
    this.sharedService.changeMessage([]);
  }
}
