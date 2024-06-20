import { Component, OnInit, Input } from '@angular/core';
import {Course} from "../../../model/course.model";
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() courseData!: Course;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  getCourseDetail(data: Course): void {
    this.courseService.sendCourse(data);
  }

  // getCourseDetail(data: any): any {
  //   // return this.courseData
  //   return console.log(data)
  // }

}
