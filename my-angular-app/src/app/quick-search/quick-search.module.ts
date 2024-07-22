import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchComponent } from "./quick-search.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        QuickSearchComponent,
    ],
    exports: [
        QuickSearchComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class QuickSearchModule { }
