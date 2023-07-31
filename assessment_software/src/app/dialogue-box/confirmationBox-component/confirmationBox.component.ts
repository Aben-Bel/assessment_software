import {Component, Input} from '@angular/core';

@Component({selector:'app-confirmation-box',
templateUrl:'./confirmationBox.component.html',
styleUrls:['./confirmationBox.component.css']})

export class ConfirmationBoxComponent{
    @Input() message:string='Successfully submitted assignment';
}