import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  submitCourse(courseName: string, yearSemester: string) {
    console.log(`courseName: ${courseName}, yearSemester: ${yearSemester}.`);
  }
}
