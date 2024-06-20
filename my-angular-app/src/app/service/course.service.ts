import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];
  private courseSubject = new BehaviorSubject<Course | null>(null);

  course$ = this.courseSubject.asObservable();


  constructor() { }

  sendCourse(course: Course) {
    this.courseSubject.next(course);
  }

  getCourses(): Course[] {
    const listCourses: Course[] = [
      { name: "Javascript", code: "JS", description: "Javascript course, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", teacher: "Teacher 1", price: 100, promo: true, category: "free", id: 1 },
      { name: "Angular", code: "ANG", description: "Angular course, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", teacher: "Teacher 2", price: 200, promo: false, category: "premium", id: 2 },
      { name: "React", code: "RE", description: "React course, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", teacher: "Teacher 3", price: 300, promo: true, category: "free", id: 3 },
      { name: "Tailwind", code: "RE", description: "React course, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", teacher: "Teacher 3", price: 300, promo: true, category: "free", id: 4 },
    ]

    return this.courses = listCourses;
  }


  getCourseDetails(id: number): Course | undefined {
    console.log(this.courses.find(course => course.id === id), "final")
    return this.courses.find(course => course.id === id);
  }

}
