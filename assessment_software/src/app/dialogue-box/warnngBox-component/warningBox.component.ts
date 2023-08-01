import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({selector:'app-warning-box',
templateUrl:'./warningBox.component.html',
styleUrls:['./warningBox.component.css']})

export class WarningBoxComponent{
    @Input() warning_message:string='Are you sure you want to archive this assignment?';
    @Output() onWarningButtonClick=new EventEmitter;
    hideBox:boolean=false;
    hideDialogue(event: Event) {
            this.hideBox=true;
    }
    warningButtonClicked(event: Event) {
        this.onWarningButtonClick.emit(event)
    }
}