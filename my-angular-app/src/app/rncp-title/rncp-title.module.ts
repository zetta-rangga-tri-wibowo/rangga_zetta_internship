import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RncpTitleRoutingModule } from './rncp-title-routing.module';
import { RncpTitlePageComponent } from './rncp-title-page/rncp-title-page.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    RncpTitlePageComponent
  ],
  imports: [
    CommonModule,
    RncpTitleRoutingModule,
    SharedModule
  ]
})
export class RncpTitleModule { }
