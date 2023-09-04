import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddCourseService } from './add-course-service/add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})

export class AddCourseComponent {
  courseService:AddCourseService;
  isCancelClicked:boolean=false;
  
   constructor(courseService: AddCourseService) {
    this.courseService = courseService;
  } 
  addCourseForm = new FormGroup({
    courseName: new FormControl(),
    semesterYear: new FormControl()
  });
  courseNameInput=this.addCourseForm.controls['courseName'];
  semesterYearInput=this.addCourseForm.controls['semesterYear'];

  courseNameChange(event:any){
    this.courseNameInput.setValue(event);
  }
  
  semesterYearChange(event:any){
    this.semesterYearInput.setValue(event);
   }

   submitCourse() {
    this.courseService.submitCourse(
      this.addCourseForm.value.courseName ?? '',
      this.addCourseForm.value. semesterYear ?? ''
    );
  }
  cancelButtonClicked(){
    this.isCancelClicked=true;
  }
}
