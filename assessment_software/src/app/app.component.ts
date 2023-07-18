import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment_software';
  fileSelected:any[]=[];
  textAreaValue:string='';

  eventOutput(newFile:any){
    this.fileSelected=newFile;
  }
  textAreaOutput(newText:string){
    this.textAreaValue=newText;
  }
}
