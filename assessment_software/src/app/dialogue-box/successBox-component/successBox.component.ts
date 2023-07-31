import {Component, Input} from '@angular/core';

@Component({selector:'app-success-box',
templateUrl:'./successBox.component.html',
styleUrls:['./successBox.component.css']})

export class SuccessBoxComponent{
    @Input() success_message:string='Successfully added assignment';
    @Input() successBoxStyle:string='success';
}