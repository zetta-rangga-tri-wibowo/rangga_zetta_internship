import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroModule} from "./hero/hero.module";
import {LogModule} from "./log/log.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    LogModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
