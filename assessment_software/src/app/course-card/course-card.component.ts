import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseCard } from '../model/course-card/course-card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() courseCard:CourseCard= new CourseCard('Course Name',2023,1,0,0);
  
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
