import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({selector:'app-success-box',
templateUrl:'./successBox.component.html',
styleUrls:['./successBox.component.css']})

export class SuccessBoxComponent{
    @Input() success_message:string='Successfully added assignment';
    isCancelClicked:boolean=false;
    @Output() onSuccessButtonClick = new EventEmitter<Event>();

    successButtonClicked(event: Event) {
      this.onSuccessButtonClick.emit(event);
    }
    hideMessageBox(){
     this.isCancelClicked=true;
    }
}