import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CourseService} from "../service/course.service";


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  // providers: [CourseService]
})
export class SharedModule { }
