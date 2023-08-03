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
    Passcode:"AbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    Email:"AbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAbebehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
   },
   {
    Name:"Bekele",
    ID:"2",
    Passcode:"",
    Email:""
   }
 ]
  menuLinks=["\\Change Password", "\\Log Out"];
  menuLabels=['Change Password', "Log Out"];
  eventOutput(newFile:any){
    this.fileSelected=newFile;
  }
  textAreaOutput(newText:string){
    this.textAreaValue=newText;
  }
  dialogueBoxButton(event:any){
     let button = <HTMLElement>event.target;
     let buttonText= button.innerHTML;
    console.log(buttonText);
  }
  courseCardButton(event:any){
     console.log("card");
  }
  archiveButton(event:any){
    let button = <HTMLElement>event.target;
    let buttonText= button.innerHTML;
    console.log("buttonText");
  }
  assignmentButton(event:any){
    let button = <HTMLElement>event.target;
    let buttonText= button.innerHTML;
    console.log(buttonText);
  }
  studentButton(event:any){
    let button = <HTMLElement>event.target;
    let buttonText= button.innerHTML;
    console.log(buttonText);
  }
}
