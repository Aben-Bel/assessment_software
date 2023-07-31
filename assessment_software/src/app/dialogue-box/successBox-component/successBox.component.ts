import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({selector:'app-success-box',
templateUrl:'./successBox.component.html',
styleUrls:['./successBox.component.css']})

export class SuccessBoxComponent{
    @Input() success_message:string='Successfully added assignment';
    @Output() onClick = new EventEmitter<Event>();

    handleClick(event: Event) {
      this.onClick.emit(event);
    }
}