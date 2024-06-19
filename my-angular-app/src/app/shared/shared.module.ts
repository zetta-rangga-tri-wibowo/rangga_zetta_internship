import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Logger} from "../service/logger.service";
import {HeroService} from "../service/hero.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [Logger, HeroService]
})
export class SharedModule { }
