import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolPageComponent } from './school-page/school-page.component';
import { SharedModule } from "../shared/shared.module";
import { TableSchoolComponent } from './table-school/table-school.component';


@NgModule({
  declarations: [
    SchoolPageComponent,
    TableSchoolComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    SharedModule
  ]
})
export class SchoolModule { }
