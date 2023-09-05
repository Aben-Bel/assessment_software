import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentCard } from 'src/app/model/assignment-card/assignment-card';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.css'],
})
export class AssignmentCardComponent {
  @Input() assignment: AssignmentCard = new AssignmentCard(
    'N/A',
    'N/A',
    'N/A',
    new Date(),
    'N/A',
    'N/A',
    'N/A'
  );

  @Output() onCardClick = new EventEmitter();
  @Output() onShareClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();

  handleCardClick(event: any) {
    this.onCardClick.emit(event);
  }

  handleShareClick(event: any) {
    event.stopPropagation();
    this.onShareClick.emit(event);
  }

  handleEditClick(event: any) {
    event.stopPropagation();
    this.onEditClick.emit(event);
  }
}
