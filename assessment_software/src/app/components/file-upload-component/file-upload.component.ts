import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
    listOfFiles:any[]=[];
    
    type: string = 'file';
    @Input() accept: string = '';
    @Input() styles: string = '';
    @Input() fileSizeLimit:any;
    @Input() error:boolean=false;
    @Input() errorMessage:string='Unknown error ';
    @Output() fileSelected = new EventEmitter;

    handleFileSize(event:any){
      this.listOfFiles=event.target.files;    
      for (let file of this.listOfFiles){
        if (file.size/1000000>=this.fileSizeLimit)
       { this.error= true;
        this.errorMessage='Sorry, the file you uploaded is too large. The maximum file size is '+this.fileSizeLimit+ 'MB';
      }
        else
        this.error= false;
      }
    }
    
    fileUploaded(event:any){
      this.fileSelected.emit(event.target.files);
    }
}
