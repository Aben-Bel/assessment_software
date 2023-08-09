import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseCard } from '../model/course-card/course-card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() courseCard: CourseCard = new CourseCard(
    'Course Name',
    2023,
    1,
    0,
    0
  );
  @Output() onCourseCardClicked = new EventEmitter();
  @Output() onArchiveClicked = new EventEmitter();
  @Output() onAddAssignmentClicked = new EventEmitter();
  @Output() onAddStudentClicked = new EventEmitter();

  handleCardClick(event: Event) {
    this.onCourseCardClicked.emit(event);
  }

  handleArchiveClick(event: Event) {
    event.stopPropagation();
    this.onArchiveClicked.emit(event);
  }

  handleAddAssignmentClick(event: Event) {
    event.stopPropagation();
    this.onAddAssignmentClicked.emit(event);
  }

  handleAddStudentClick(event: Event) {
    event.stopPropagation();
    this.onAddStudentClicked.emit(event);
  }
}
