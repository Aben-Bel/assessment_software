import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
    listOfFiles:any[]=[];
    
    @Input() type: string = 'file';
    @Input() accept: string = '';
    @Input() styles: string = '';
    @Input() fileSizeLimit:any;
    @Input() error:boolean=false;
    
    handleFileSize(event:any){
      this.listOfFiles=event.target.files;
      for (let file of this.listOfFiles){
        if (file.size/1000000>=this.fileSizeLimit)
        this.error= true;
        else
        this.error= false;
      }
    }
}
