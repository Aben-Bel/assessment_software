import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
    @Input() type: string = 'file';
    @Input() accept: string = '';
    @Input() styles: string = '';
}
