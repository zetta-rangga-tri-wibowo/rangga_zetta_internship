import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course.model';
import {CourseService} from "../../../service/course.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  course!: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.course$.subscribe(course => {
      if (course) {
        this.course = course;
      }
    });
  }

}
