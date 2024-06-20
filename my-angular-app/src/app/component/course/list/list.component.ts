import { Component, OnInit, EventEmitter } from '@angular/core';
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../model/course.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: Course[] = [];
  courseCountRadioButton: string = 'all';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log(this.courses)
  }

  getTotalCourses(){
    return this.courses.length;
  }

  getFreeCourses(){
    return this.courses.filter(course => course.category === 'free').length;
  }

  getPremiumCourses(){
    return this.courses.filter(course => course.category === 'premium').length;
  }

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

}
