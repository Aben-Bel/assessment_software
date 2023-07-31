import {Component, Input} from '@angular/core';

@Component({selector:'app-table',
templateUrl:'./table.component.html',
styleUrls:['./table.component.css']
})

export class TableComponent{
    @Input() headers:string[]=[]; 
    @Input() width:Number=700;
    @Input() data: {[key: string]: string}[]=[{ }];
   @Input() isWrappable:boolean=false;
   @Input() isScrollable:boolean=false;
   @Input() layout:string='';
   

}