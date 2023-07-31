import {Component, Input} from '@angular/core';

@Component({selector:'app-warning-box',
templateUrl:'./warningBox.component.html',
styleUrls:['./warningBox.component.css']})

export class WarningBoxComponent{
    @Input() warning_message:string='Error';
    @Input() warningBoxStyle:string='warning';
    buttonStyle='warning-button';
}