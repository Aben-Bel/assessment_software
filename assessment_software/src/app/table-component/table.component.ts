import {Component, Input} from '@angular/core';

@Component({selector:'app-table',
templateUrl:'./table.component.html',
styleUrls:['./table.component.css']
})

export class TableComponent{
     @Input() width:Number=0;
}//https://developer.mozilla.org/en-US/docs/Web/CSS/width