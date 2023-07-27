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

  headers:string[]=['Name','ID','Passcode','Email',"koo"];
  data:any[]=[{
    Name:"Abebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    ID:"1",
    Passcode:"",
    Email:""
   },
   {
    Name:"Bekele",
    ID:"2",
    Passcode:"",
    Email:""
   }
 ]

  eventOutput(newFile:any){
    this.fileSelected=newFile;
  }
  textAreaOutput(newText:string){
    this.textAreaValue=newText;
  }
}
