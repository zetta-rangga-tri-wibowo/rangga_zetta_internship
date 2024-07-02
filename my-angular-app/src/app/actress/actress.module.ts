import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActressCardComponent } from './actress-card/actress-card.component';
import { ActressPageComponent } from './actress-page/actress-page.component';
import { ActressListComponent } from './actress-list/actress-list.component';
import { ActressDetailComponent } from './actress-detail/actress-detail.component';
import { MaterialModule } from "../material.module";
import { ActressCastingComponent } from './actress-casting/actress-casting.component';
import { MovieRoutingModule } from "./actress-routing.module";


@NgModule( {
  declarations: [
    ActressCardComponent,
    ActressPageComponent,
    ActressListComponent,
    ActressDetailComponent,
    ActressCastingComponent
  ],
  exports: [
    ActressCardComponent,
    ActressListComponent,
    ActressCastingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule
  ]
})
export class ActressModule { }
