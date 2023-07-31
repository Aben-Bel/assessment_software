import {Component, Input} from '@angular/core';

@Component({selector:'app-confirmation-box',
templateUrl:'./confirmationBox.component.html',
styleUrls:['./confirmationBox.component.css']})

export class ConfirmationBoxComponent{
    @Input() confirmation_message:string='Successfully submitted assignment';
    @Input() confirmationStyle='confirm';
}