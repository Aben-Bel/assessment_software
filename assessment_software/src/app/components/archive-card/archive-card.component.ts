import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseCard } from 'src/app/model/course-card/course-card.model';

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css'],
})
export class ArchiveCardComponent {
  @Input() courseCard: CourseCard = new CourseCard(
    'N/A',
    Infinity,
    Infinity,
    Infinity,
    Infinity
  );
  @Output() onCourseCardClicked = new EventEmitter();
  @Output() onArchiveClicked = new EventEmitter();

  handleCardClick(event: Event) {
    this.onCourseCardClicked.emit(event);
  }

  handleArchiveClick(event: Event) {
    event.stopPropagation();
    this.onArchiveClicked.emit(event);
  }
}
