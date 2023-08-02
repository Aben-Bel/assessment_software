import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() courseName:string='Course Name';
  @Input() year_semester= new Date().getFullYear() + "/1";
  @Input() assignments:Number=0;
  @Input() submissions:Number=0;

  @Output() onArchiveClicked= new EventEmitter;
  @Output() onAddAssignmentClicked= new EventEmitter;
  @Output() onAddStudentClicked= new EventEmitter;

  handleArchiveClick(event:Event){
    this.onArchiveClicked.emit(event);
  }
  handleAddAssignmentClick(event:Event){
    this.onAddAssignmentClicked.emit(event);
  }
  handleAddStudentClick(event:Event){
    this.onAddStudentClicked.emit(event);
  }
}
