import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment_software';
  fileSelected:any[]=[];

  pathDisplay:string[]=['DSA','Assignment','Assignment 1','Edit Assignment'];
  links:string[]=['/DSA','/Assignment','/Assignment 1','/Edit Assignment'];

  textAreaValue:string='';

  data:any[]=[{
    name:"Abebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    ID:"1",
    passcode:"",
    email:""
   },
   {
    name:"Bekele",
    ID:"2",
    passcode:"",
    email:""
   }
 ]

  eventOutput(newFile:any){
    this.fileSelected=newFile;
  }
  textAreaOutput(newText:string){
    this.textAreaValue=newText;
  }
}
