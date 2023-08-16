import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})

export class AddCourseComponent {
  courseService:CourseService;
  
   constructor(courseService: CourseService) {
    this.courseService = courseService;
  } 
  addCourseForm = new FormGroup({
    courseName: new FormControl(),
    semesterYear: new FormControl()
  });
  courseNameInput=this.addCourseForm.controls['courseName'];
  semesterYearInput=this.addCourseForm.controls['semesterYear'];

  submitCourse() {
    this.courseService.submitCourse(
      this.addCourseForm.value.courseName ?? '',
      this.addCourseForm.value. semesterYear ?? ''
    );
    console.log( this.addCourseForm.value. semesterYear);
  }

}
