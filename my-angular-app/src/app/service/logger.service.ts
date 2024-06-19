import { Injectable } from '@angular/core';
import {SharedLogService} from "./shared-log.service";

@Injectable({
  providedIn: 'root'
})
export class Logger {
  constructor(private sharedService: SharedLogService) {}
  log(msg: any) {
    this.sharedService.changeMessage([...this.sharedService.currentMessageValue, msg]);
    console.log(msg);
  }
}
