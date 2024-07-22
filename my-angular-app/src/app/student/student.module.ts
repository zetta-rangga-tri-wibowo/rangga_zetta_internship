import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from "../shared/shared.module";
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentActiveComponent } from './student-active/student-active.component';


@NgModule({
  declarations: [
    StudentPageComponent,
    StudentTableComponent,
    StudentActiveComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
