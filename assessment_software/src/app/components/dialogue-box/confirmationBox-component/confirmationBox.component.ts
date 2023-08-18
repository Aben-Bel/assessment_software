import {Component, Input} from '@angular/core';

@Component({selector:'app-confirmation-box',
templateUrl:'./confirmationBox.component.html',
styleUrls:['../successBox-component/successBox.component.css', './confirmationBox.component.css']})

export class ConfirmationBoxComponent{
    @Input() confirmation_message:string='Successfully submitted assignment';
    hideBox:boolean=false;
    closeDialogueBox(){
        this.hideBox=true;
    }
}