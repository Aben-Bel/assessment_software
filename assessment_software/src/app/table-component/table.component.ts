import {Component, Input} from '@angular/core';

@Component({selector:'app-table',
templateUrl:'./table.component.html',
styleUrls:['./table.component.css']
})

export class TableComponent{
     @Input() width:Number=0;
     @Input() data=[{
      name:"",
      ID:"",
      passcode:"",
      email:""
     }
   ]
}