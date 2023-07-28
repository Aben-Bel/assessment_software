import {Component, Input} from '@angular/core';

@Component({selector:'app-table',
templateUrl:'./table.component.html',
styleUrls:['./table.component.css']
})

export class TableComponent{
    @Input() headers:string[]=[]; 
    @Input() width:Number=700;
    @Input() data: {[key: string]: string}[]=[{
      Name:"",
      ID:"",
      Passcode:"",
      Email:"",
     }
   ];
   @Input() wrapStyle:string='';
   @Input() scrollStyle:string='';
   @Input() layout:string='';

}