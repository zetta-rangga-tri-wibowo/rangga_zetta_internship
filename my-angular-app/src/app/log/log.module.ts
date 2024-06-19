// src/app/log/log.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogStatusComponent } from './log-status/log-status.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LogStatusComponent
  ],
  exports: [
    LogStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LogModule { }
